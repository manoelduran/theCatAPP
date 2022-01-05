import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    IconContainer,
    Separator,
    InputText,
} from './styles';

export function SearchInput() {
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

            />
        </Container>
    );
}