import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    Image,
    DataContainer,
    Name,
    Description,
} from './styles';
interface CatCardProps extends RectButtonProps {
    data: Cat;
}
export function CatCard({ data, ...rest }: CatCardProps) {
    return (
        <Container  {...rest} >
            <Image source={{ uri: data?.image?.url}} resizeMode="contain" />
            <DataContainer>
                <Name> {data.name} </Name>
                <Description> {data.description} </Description>
            </DataContainer>
        </Container>
    );
}