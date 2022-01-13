import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, StatusBar } from 'react-native';
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

    useEffect(() => {
        try {
            showCats();
        } catch (error) {
            throw new Error(error as string)
        } finally {
            setLoading(false)
        }
    }, []);
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
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>MiauPP</Title>
            </Header>
            <Subtitle>Search by Breed</Subtitle>
            <SearchInput value='' onChangeText={() => { }} />
            {loading ? <LoadAnimation /> :
                <CatList
                    data={cats}
                    keyExtractor={(item: Cat) => item.id}
                    renderItem={({ item }: any) =>
                        <CatCard data={item} onPress={() => handleCatCard(item)} />}
                />
            }
        </Container>
    )
}