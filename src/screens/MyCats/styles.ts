import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const Text = styled.Text`
`;


export const CatList = styled(FlatList as new () => FlatList<Cat[]>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
`;

export const Button = styled.Button`

`;