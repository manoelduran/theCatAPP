import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    Content,
    Image,
    Details,
    Icon,
    Origin,
    Name,
    Description,
    Separator,
    Temperament,
    LevelDiv,
    LevelName,
    Footer,
    Button
} from './styles';
import { BackButton } from '../../components/BackButton';
import { useCat } from '../../hooks/CatContext';
import { AirbnbRating } from 'react-native-ratings';
import { useTheme } from 'styled-components/native';
import { Linking, StatusBar } from 'react-native';
interface Params {
    cat: Cat;
};
export function Cat() {
    const route = useRoute();
    const { cat } = route.params as Params;
    const { favoriteCat, removeCat, catsFavorite } = useCat();
    const theme = useTheme();
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack();
    };
    async function handleLink(wikipedia_url: string) {
        await Linking.openURL(wikipedia_url)
    }
    return (
        <Container>
                     <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton
                    onPress={handleBack}
                />
                <Title>Everything you need to know about '{cat.name}'  breed</Title>
            </Header>
            <Content>
                <Image source={{ uri: cat?.image?.url }} width={cat?.image?.width} height={cat?.image?.height} resizeMode="contain" />
                <Details>
                    <Origin> {cat.origin} </Origin>
                    {catsFavorite.find(catFavorite => catFavorite.id === cat.id)
                        ?
                        <Icon name='star' size={30} active={true} onPress={() => removeCat()} />
                        :
                        <Icon name='star' size={30} active={false} onPress={() => favoriteCat(cat)} />
                    }
                </Details>
                <Name> {cat.name} </Name>
                <Description> {cat.description} </Description>
                <Separator />
                <Temperament> {cat.temperament} </Temperament>
                <LevelDiv>
                    <LevelName>Affection</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.affection_level}
                        size={20}
                        selectedColor={theme.colors.header}

                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Adaptability</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.adaptability}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Child Friendly</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.child_friendly}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Dog Friendly</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.dog_friendly}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Energy Level</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.energy_level}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Grooming</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.grooming}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Health Issues</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.health_issues}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Intelligence</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.intelligence}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Shedding Level</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.shedding_level}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Social Needs</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.social_needs}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Stranger Friendly</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.stranger_friendly}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
                <LevelDiv>
                    <LevelName>Vocalisation</LevelName>
                    <AirbnbRating
                        isDisabled
                        showRating={false}
                        defaultRating={cat.vocalisation}
                        size={20}
                        selectedColor={theme.colors.header}
                    />
                </LevelDiv>
            </Content>
            <Footer>
                <Button title='WIKIPÉDIA' onPress={() => handleLink(cat.wikipedia_url)} />
            </Footer>
        </Container>
    );
}