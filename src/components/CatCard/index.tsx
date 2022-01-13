import React from 'react';
import {
    Container,
    Image,
    DataContainer,
    Name,
    Description
} from './styles';
interface CatCardProps {
    data: Cat;
    onPress: () => void;
}
export function CatCard({ data, onPress }: CatCardProps) {

    return (
        <Container onPress={onPress}  >
            <Image source={{ uri: data?.image?.url }} width={data?.image?.width} height={data?.image?.height} resizeMode="contain" />
            <DataContainer>
                <Name> {data?.name} </Name>
                <Description> {data?.description}</Description>
            </DataContainer>
        </Container>
    );
}