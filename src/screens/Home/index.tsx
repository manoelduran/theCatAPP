import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import {
    Container,
    Header,
    Title,
    CatList
} from './styles';
import * as api from '../../services/api';
import { SearchInput } from '../../components/SearchInput';

export function Home() {
    const [cats, setCats] = useState<Cat[]>([] as Cat[])
    async function ShowCats() {
        try {
            const catList = await api.SearchCats();
            console.log(catList)
        } catch(error: any){
            return Alert.alert('Erro ao buscar a lista de gatos', error.message)
        }
    }
    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>CAT APP</Title>
            </Header>
            <SearchInput/>
 
        </Container>
    )
}