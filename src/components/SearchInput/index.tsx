import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separator,
    InputText,
} from './styles';

interface SearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

export function SearchInput({ value, onChangeText }: SearchInputProps) {
    const [search, setSearch] = useState(value);

    function handleSearch(text: string) {
        setSearch(text);
        setTimeout(() => {
            onChangeText(text);
        }, 1000);
    };

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
                onChangeText={(text: string) => handleSearch(text)}
            />
        </Container>
    );
}