import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separator,
    InputText,
} from './styles';

interface SearchInputProps{
value: string;
onChangeText: () => void;
}

export function SearchInput({value, onChangeText}: SearchInputProps) {
    const [search, setSearch] = useState(value);

    return (
        <Container>
            <IconContainer>
                <Feather
                    name='search'
                    size={24}
                />
            </IconContainer>
            <Separator />
            <InputText
                value={search}
                onChangeText={setSearch}
            />
        </Container>
    );
}