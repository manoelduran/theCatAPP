import React, { createContext, FormEvent, ReactNode, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../services/api';
import { Alert } from 'react-native';

interface CatProviderProps {
    children: ReactNode;
}

interface CatContextData {
    cats: Cat[];
    favoriteCats: Cat[];
    loading: boolean;
    showCats: () => Promise<void>;
    favoriteCat: (cat: Cat) => Promise<void>;
    removeCat: (cat: Cat) => Promise<void>;
}
const CatContext = createContext({} as CatContextData);

function CatProvider({ children }: CatProviderProps) {
    const [cats, setCats] = useState<Cat[]>([]);
    const [favoriteCats, setFavoriteCats] = useState<Cat[]>([] as Cat[]);
    const [loading, setLoading] = useState(true);
    async function showCats() {
        try {
            const catList = await api.SearchCats();
            setCats(catList);
        } catch (error: any) {
            return Alert.alert('Erro ao buscar a lista de gatos', error.message);
        } finally {
            setLoading(false);

        }
    };

    async function favoriteCat(cat: Cat) {
        try {
            const updatedCat = [...favoriteCats]
            const catExists = updatedCat.find(cat => cat.id === cat.id);
            if(catExists){
                catExists === cat
            } 
            updatedCat.push(cat);
           await AsyncStorage.setItem('favoriteCats', JSON.stringify(updatedCat));
            setFavoriteCats(updatedCat)
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        }
    };
    async function removeCat(cat: Cat) {
        try {
           await AsyncStorage.removeItem('favoriteCats');
           setFavoriteCats([] as Cat[])
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        };
    };


    return (
        <CatContext.Provider value={{ cats, showCats, favoriteCat, favoriteCats, loading, removeCat }}>
            {children}
        </CatContext.Provider>
    )
}

function useCat(): CatContextData {
    const context = useContext(CatContext);
    return context
}

export { CatProvider, useCat }


