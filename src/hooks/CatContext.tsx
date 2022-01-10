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
    favoriteCat: (id: string) => Promise<void>;
    removeCat: (id: string) => Promise<void>;
}
const CatContext = createContext({} as CatContextData);

function CatProvider({ children }: CatProviderProps) {
    const [cats, setCats] = useState<Cat[]>([]);
    const [favoriteCats, setFavoriteCats] = useState<Cat[]>(JSON.parse(String(AsyncStorage.getItem('@favoriteCats'))!) ?? []);
    const [loading, setLoading] = useState(true);

    async function favoriteCat(id: string) {
        try {
            const addCat = await cats.find((cat: Cat) => cat.id === id);
            await AsyncStorage.setItem('@favoriteCats', JSON.stringify(addCat))
            setFavoriteCats((prevState) => ({ ...prevState, favoriteCats: addCat }))
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        }
    };
    async function removeCat(id: string) {
        try {
            const removeCat = await favoriteCats.filter((cat: Cat) => cat.id !== id)
            AsyncStorage.setItem('@favoriteCats', JSON.stringify(removeCat));
            setFavoriteCats(removeCat);
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        };
    };


    return (
        <CatContext.Provider value={{ cats, favoriteCat, favoriteCats, loading, removeCat }}>
            {children}
        </CatContext.Provider>
    )
}

function useCat(): CatContextData {
    const context = useContext(CatContext);
    return context
}

export { CatProvider, useCat}


