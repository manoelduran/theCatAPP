import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
Container
} from  './styles';
interface Params {
    cat: Cat;
};
export function Cat(){
    const navigation = useNavigation<any>();
    const route = useRoute();
    const theme = useTheme();
    const {cat } = route.params as Params;
    return (
        <Container>
            <Text> {cat.name} </Text>
        </Container>
    );
}