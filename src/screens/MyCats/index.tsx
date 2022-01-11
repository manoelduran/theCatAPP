import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CatCard } from '../../components/CatCard';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useCat } from '../../hooks/CatContext';
import {
    Container,
    Header,
    Title,
    Subtitle,
    CatList,
    Button
} from './styles';

export function MyCats() {
    const { removeCat } = useCat();
    const [catFavoriteList, setCatFavoriteList] = useState<Cat[]>([] as Cat[] ?? null)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isMounted = true;
        async function showFavorites() {
            try {
                const catsFavorite = await AsyncStorage.getItem('@CatsFavorite');
                if (isMounted) {
                    setCatFavoriteList(catsFavorite !== null ? JSON.parse(catsFavorite) : null);
                }
            } catch (error) {
                throw new Error(error as string);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }
        showFavorites()
    }, [])
    const navigation = useNavigation<any>();
    function handleCatCard(cat: Cat) {
        navigation.navigate('Cat', {
            cat
        });
    }
    return (
        <Container>
            <Header>
                <Title>MiauPP</Title>
            </Header>
            <Subtitle>Favorites Cats</Subtitle>
            {loading ?
                <LoadAnimation />
                :
                <CatList
                    data={catFavoriteList}
                    keyExtractor={(item: Cat) => item.id}
                    renderItem={({ item }: any) =>
                        <CatCard data={item} onPress={() => handleCatCard(item)} />}
                />
            }

            <Button title='REMOVER' onPress={() => removeCat()}>REMOVER</Button>
        </Container>
    )
}