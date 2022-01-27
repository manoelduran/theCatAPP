import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CatCard } from '../../components/CatCard';
import { Feather } from '@expo/vector-icons';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useCat } from '../../hooks/CatContext';
import {
    Container,
    Header,
    Title,
    Subtitle,
    CatList,
    Button,
    LogoutButton
} from './styles';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../hooks/AuthContext';

export function MyCats() {
    const { removeAllCats } = useCat();
    const { signOut } = useAuth();
    const theme = useTheme();
    const [catList, setCatList] = useState<Cat[]>([] as Cat[] ?? null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        let isMounted = true;
        async function showFavorites() {
            try {
                const catsFavorite = await AsyncStorage.getItem('@CatsFavorite');
                if (isMounted) {
                    setCatList(catsFavorite !== null ? JSON.parse(catsFavorite) : null);
                }
            } catch (error) {
                throw new Error(error as string)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }
        showFavorites();
        return () => {
            isMounted = false;
        };
    }, [CatList, removeAllCats]);
    const navigation = useNavigation<any>();
    function handleCatCard(cat: Cat) {
        navigation.navigate('Cat', {
            cat
        });
    }
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
            <Subtitle>Favorite Cats</Subtitle>
            {loading ? <LoadAnimation /> :
                <>
                    {catList ? <>
                        <CatList
                            data={catList}
                            keyExtractor={(item: Cat) => item.id}
                            renderItem={({ item }: any) =>
                                <CatCard data={item} onPress={() => handleCatCard(item)} />}
                        />
                        <Button title='Limpar Favoritos ' onPress={() => removeAllCats()} />
                    </>
                        : null}
                </>
            }
        </Container>
    )
}