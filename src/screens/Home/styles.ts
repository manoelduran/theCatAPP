import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
padding: 32px 24px;
background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
`;

export const CatList = styled(FlatList as new () => FlatList<Cat[]>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;