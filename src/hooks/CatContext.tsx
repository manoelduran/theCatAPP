import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
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
    removeCat: (cat: Cat) => Promise<void>;
    removeAllCats: () => Promise<void>;
}
const CatContext = createContext({} as CatContextData);

function CatProvider({ children }: CatProviderProps) {
    const [cats, setCats] = useState<Cat[]>([]);
    const [catsFavorite, setCatsFavorite] = useState<Cat[]>([] as Cat[]);
    const { setItem, removeItem, getItem } = useAsyncStorage('@CatsFavorite');
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
        }
    };
    async function removeCat(cat: Cat) {
        const removedCat = await catsFavorite.filter(catFiltered => catFiltered.id !== cat.id)
        try {
            await setItem(JSON.stringify(removedCat))
            setCatsFavorite(removedCat)
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        };
    };

    async function removeAllCats() {
        try {
            await removeItem()
            setCatsFavorite([] as Cat[])
        } catch (error) {
            throw new Error(error as string);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        let isMounted = true;
        async function loadUserData() {
            const favoriteCollection = await getItem();
            const parsedFavorite = JSON.parse(String(favoriteCollection))
            console.log('AQUIIIIIIIIIIIIIIIIIIIIIII PORRAAAA')
            console.log(parsedFavorite)
            if (parsedFavorite) {
                const FavoriteCatData = parsedFavorite as unknown as Cat[]
                if (isMounted) {
                    setCatsFavorite(FavoriteCatData)
                    setLoading(false);
                }
            };
        };
        loadUserData();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <CatContext.Provider value={{ cats, showCats, removeAllCats, catsFavorite, favoriteCat, loading, removeCat }}>
            {children}
        </CatContext.Provider>
    )
}

function useCat(): CatContextData {
    const context = useContext(CatContext);
    return context
}

export { CatProvider, useCat }


