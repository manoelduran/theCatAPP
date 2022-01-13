import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import {
    Container,
    Header,
    Title,
    Subtitle,
    CatList
} from './styles';
import * as api from '../../services/api';
import { SearchInput } from '../../components/SearchInput';
import { LoadAnimation } from '../../components/LoadAnimation';
import { CatCard } from '../../components/CatCard';
import { useNavigation } from '@react-navigation/native';
import { useCat } from '../../hooks/CatContext';

export function Home() {
    const { cats, showCats } = useCat();
    const navigation = useNavigation<any>();
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const result = cats.find(cat => cat.name === search);
    const catSearched = result as Cat;
    useEffect(() => {
        try {
            if(search) {
                return 
            } else {
                showCats();
            }
        } catch (error) {
            throw new Error(error as string)
        } finally {
            setLoading(false)
        }
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
            </Header>
            <Subtitle>Search by Breed</Subtitle>
            <SearchInput value={search} onChangeText={(search) => setSearch(search)} />
            {loading ? <LoadAnimation /> :
                <>
                    {catSearched ?
                        <CatList
                            data={catSearched}
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