import React, { createContext, ReactNode, useContext, useState } from 'react';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import * as api from '../services/api';
import { Alert } from 'react-native';

interface CatProviderProps {
    children: ReactNode;
}

interface CatContextData {
    cats: Cat[];
    catsFavorite: Cat[];
    loading: boolean;
    showCats: () => Promise<void>;
    favoriteCat: (cat: Cat) => Promise<void>;
    removeCat: () => Promise<void>;
}
const CatContext = createContext({} as CatContextData);

function CatProvider({ children }: CatProviderProps) {
    const [cats, setCats] = useState<Cat[]>([]);
    const [catsFavorite, setCatsFavorite] = useState<Cat[]>([] as Cat[])
    const { getItem ,setItem, removeItem } = useAsyncStorage('@CatsFavorite');
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
            const updatedCat = [...catsFavorite];
            const newCat = cat;
            updatedCat.push(newCat);
            await setItem(JSON.stringify(updatedCat));
            setCatsFavorite(updatedCat);
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        }
    };
    async function removeCat() {
        try {
             await removeItem()
            setCatsFavorite([] as Cat[])
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        };
    };


    return (
        <CatContext.Provider value={{ cats, showCats, catsFavorite, favoriteCat, loading, removeCat }}>
            {children}
        </CatContext.Provider>
    )
}

function useCat(): CatContextData {
    const context = useContext(CatContext);
    return context
}

export { CatProvider, useCat }


