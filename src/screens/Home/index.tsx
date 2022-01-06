import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import {
    Container,
    Header,
    Title,
    CatList
} from './styles';
import * as api from '../../services/api';
import { SearchInput } from '../../components/SearchInput';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CatCard } from '../../components/CatCard';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [cats, setCats] = useState<Cat[]>([]);
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let Mounted = true;
        async function ShowCats() {
            try {
                const catList = await api.SearchCats();
                if (Mounted) {
                    setCats(catList);
                }
            } catch (error: any) {
                return Alert.alert('Erro ao buscar a lista de gatos', error.message);
            } finally {
                if (Mounted) {
                    setLoading(false);
                }
            }
        };
        ShowCats();
        return () => {
            Mounted = false;
        }
    }, [])
    function handleCatCard() {
        console.log('AQUI PORRAAAAAAAAAAAAAAAA')
        navigation.navigate('Cat');
    }
    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>CAT APP</Title>
            </Header>
            <SearchInput />
            {loading ? <LoadAnimation /> :
                <CatList
                    data={cats}
                    keyExtractor={(item: Cat) => item.id}
                    renderItem={({ item }: any) =>
                        <CatCard data={item}  onPress={() => handleCatCard()} />}
                />
            }
        </Container>
    )
}