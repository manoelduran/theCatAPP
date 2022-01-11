import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { CatCard } from '../../components/CatCard';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useCat } from '../../hooks/CatContext';
import {
    Container,
    Text,
    CatList,
    Button
} from './styles';

export function MyCats() {
    const { favoriteCats, loading, removeCat } = useCat();
    const navigation = useNavigation<any>();
    function handleCatCard(cat: Cat) {
        console.log('AQUI PORRAAAAAAAAAAAAAAAA')
        navigation.navigate('Cat', {
            cat
        });
    }
    return (
        <Container>
            <Text>ola</Text>
            {loading ? <LoadAnimation /> :
                <>
                {favoriteCats ? <>
                    <CatList
                    data={favoriteCats}
                    keyExtractor={(item: Cat) => item.id}
                    renderItem={({ item }: any) =>
                        <CatCard data={item} onPress={() => handleCatCard(item)} />}
                />
                </> : <Text>NADA</Text>}
                </>
            }
       <Button title='REMOVER' onPress={() => removeCat}>REMOVER</Button>
        </Container>
    )
}