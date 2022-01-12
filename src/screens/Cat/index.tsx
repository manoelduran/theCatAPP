import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import {
    Container,
    Header,
    Content,
    Image,
    Details,
    Origin,
    Extra,
    Name,
    Description,
    Separator,
    Temperament,
    Levels,
    Button
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useCat } from '../../hooks/CatContext';
interface Params {
    cat: Cat;
};
export function Cat() {
    const route = useRoute();
    const { cat } = route.params as Params;
    const { favoriteCat, removeCat } = useCat();
    const navigation = useNavigation();
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
        <Content>
        <Image source={{ uri: cat?.image?.url }} width={cat?.image?.width} height={cat?.image?.height} resizeMode="contain" />
        <Details>
                <Origin> {cat.origin} </Origin>
                <Extra> {cat.hypoallergenic} </Extra>
                    <Feather name='star' size={30}  onPress={() => favoriteCat(cat)} />
                    <Button title='Remover ' onPress={() => removeCat()}/>
            </Details>
            <Name> {cat.name} </Name>
            <Description> {cat.description} </Description>
            <Separator />
            <Temperament> {cat.temperament} </Temperament>
            <Levels> {cat.affection_level} </Levels>
            <Levels> {cat.adaptability} </Levels>
            <Levels> {cat.dog_friendly} </Levels>
            <Levels> {cat.energy_level} </Levels>
            <Levels> {cat.grooming} </Levels>
            <Levels> {cat.health_issues} </Levels>
            <Levels> {cat.intelligence} </Levels>
            <Levels> {cat.shedding_level} </Levels>
            <Levels> {cat.social_needs} </Levels>
            <Levels> {cat.stranger_friendly} </Levels>
            <Levels> {cat.vocalisation} </Levels>
        </Content>
        <Button title='WIKIPEDIA' onPress={() => {}}  >
        </Button>
        </Container>
    );
}