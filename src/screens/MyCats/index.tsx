import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CatCard } from '../../components/CatCard';
import { LoadAnimation } from '../../components/LoadAnimation';
import { useCat } from '../../hooks/CatContext';
import {
    Container,
    Text,
    CatList,
    Button
} from './styles';

export function MyCats() {
    const { loading, removeCat } = useCat();
     const [test, setTest] = useState<Cat[]>([] as Cat[] ?? null)
     useEffect(() => {
         async function showFavorites() {
          const catsFavorite = await AsyncStorage.getItem('@CatsFavorite');
          setTest(catsFavorite !== null ? JSON.parse(catsFavorite) : null)
         }
         showFavorites()
     }, [test])
    const navigation = useNavigation<any>();
    function handleCatCard(cat: Cat) {
        navigation.navigate('Cat', {
            cat
        });
    }
    return (
        <Container>
            <Text>ola</Text>
            {loading ? <LoadAnimation /> :
                <>
                    {test ? <>
                        <CatList
                            data={test}
                            keyExtractor={(item: Cat) => item.id}
                            renderItem={({ item }: any) =>
                                <CatCard data={item} onPress={() => handleCatCard(item)} />}
                        />
                    </> : <Text>NADA</Text>}
                </>
            }
            <Button title='REMOVER' onPress={() => removeCat}>REMOVER</Button>
        </Container>
    )
}