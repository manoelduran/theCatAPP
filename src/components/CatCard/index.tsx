import React from 'react';
import { useCat } from '../../hooks/CatContext';
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
    const { cats } = useCat();
    const findedImage = cats.find(cat => cat.id === data.id);
    return (
        <Container onPress={onPress}  >
            {findedImage ?
                <Image source={{ uri: findedImage?.image?.url }} width={findedImage?.image?.width} height={findedImage?.image?.height} resizeMode="contain" />
                :
                null
            }
            <DataContainer>
                <Name> {data?.name} </Name>
                <Description> {data?.description}</Description>
            </DataContainer>
        </Container>
    );
}