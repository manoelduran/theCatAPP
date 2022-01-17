import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separator,
    InputText,
} from './styles';

interface SearchInputProps {
    value: string;
    onChangeText: (search: string) => void;
}

export function SearchInput({ value, onChangeText }: SearchInputProps) {
    const [displaySearch, setDisplaySearch] = useState(value);

    function handleSearch(search: string) {
        setDisplaySearch(search);
        setTimeout(() => {
            setTimeout(() =>  onChangeText(search), 2000);
        }, 2000);
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
                value={displaySearch}
                onChangeText={(search) => handleSearch(search)}
            />
        </Container>
    );
}