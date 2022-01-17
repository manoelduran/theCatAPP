import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Container
} from './styles';
import { useTheme } from 'styled-components/native';

interface BackButtonProps {
    color?: string;
    onPress: () => void;
}

export function BackButton({ color, onPress }: BackButtonProps) {
    const theme = useTheme();

    return (
        <Container onPress={onPress}>
            <Feather
                name="chevron-left"
                size={12}
                color={color ? color : theme.colors.text_datails}
            />
        </Container>
    );
}
