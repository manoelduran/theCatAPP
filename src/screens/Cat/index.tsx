import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
    Container,
    Header,
    Image,
    Button
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useCat } from '../../hooks/CatContext';
interface Params {
    cat: Cat;
};
export function Cat() {
    const {favoriteCat} = useCat();
    const navigation = useNavigation();
    const route = useRoute();
    const theme = useTheme();
    const { cat } = route.params as Params;
    function handleBack() {
        navigation.goBack();
    };
    return (
        <Container>
            <Header>
                <BackButton
                    onPress={handleBack}
                />
            </Header>
            <Image source={{ uri: cat?.image?.url }} width={cat?.image?.width} height={cat?.image?.height} resizeMode="contain" />
            <Text> {cat.origin} </Text>
            <Text> {cat.country_code} </Text>
            <Text> {cat.hypoallergenic} </Text>
            <Text> {cat.name} </Text>
            <Text> {cat.description} </Text>
            <Text> {cat.temperament} </Text>
            <Text> {cat.stranger_friendly} </Text>
            <Text> {cat.wikipedia_url} </Text>
            <Button title='FAVORITAR' onPress={() => favoriteCat}>FAVORITAR</Button>
        </Container>
    );
}