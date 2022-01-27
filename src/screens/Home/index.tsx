import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, StatusBar } from 'react-native';
import {
    Container,
    Header,
    Title,
    Subtitle,
    CatList,
    LogoutButton
} from './styles';
import * as api from '../../services/api';
import { SearchInput } from '../../components/SearchInput';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CatCard } from '../../components/CatCard';
import { useNavigation } from '@react-navigation/native';
import { useCat } from '../../hooks/CatContext';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/AuthContext';
import { useTheme } from 'styled-components/native';

export function Home() {
    const { cats, showCats } = useCat();
    const { signOut } = useAuth();
    const theme = useTheme();
    const [catsSearched, setCatsSearched] = useState<Cat[]>([]);
    const navigation = useNavigation<any>();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    async function showCatId(search: string) {
        try {
            const catList = await api.SearchCatById(search);
            setCatsSearched(catList);
        } catch (error: any) {
            return Alert.alert('Erro ao buscar a lista de gatos', error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        let isMounted = true;
        try {
            if (search) {
                if (isMounted) {
                    showCatId(search);
                }
            } else {
                if (isMounted) {
                    showCats();
                }
            }
        } catch (error) {
            throw new Error(error as string)
        } finally {
            if (isMounted) {
                setLoading(false);
            }
        }
        return () => {
            isMounted = false;
        };
    }, [search]);
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    }, []) // faz n voltar para a tela de splash
    function handleCatCard(cat: Cat) {
        navigation.navigate('Cat', {
            cat
        });
    };

    async function handleSignOut() {
        Alert.alert('Tem certeza',
            'Se você sair, irá precisar de internet para conectar-se novamente.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Sair',
                    onPress: () => signOut()
                }
            ]
        );
    };

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>MiauPP</Title>
                <LogoutButton onPress={handleSignOut}  >
                    <Feather
                        name="power"
                        color={theme.colors.shape}
                        size={24}
                    />
                </LogoutButton>
            </Header>
            <Subtitle>Search by Breed</Subtitle>
            <SearchInput value={search} onChangeText={(search) => setSearch(search)} />
            {loading ? <LoadAnimation /> :
                <>
                    {search ?
                        <CatList
                            data={catsSearched}
                            keyExtractor={(item: Cat) => item.id}
                            renderItem={({ item }: any) =>
                                <CatCard data={item} onPress={() => handleCatCard(item)} />}
                        />
                        :
                        <CatList
                            data={cats}
                            keyExtractor={(item: Cat) => item.id}
                            renderItem={({ item }: any) =>
                                <CatCard data={item} onPress={() => handleCatCard(item)} />}
                        />
                    }
                </>
            }
        </Container>
    )
}