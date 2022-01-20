import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button, ImageContainer, Text } from './styles';
interface SignInSocialButtonProps {
    title: string;
    svg: React.FC<SvgProps>
    onPress: () => void;
}

export function SignInSocialButton({ title, svg: Svg, onPress }: SignInSocialButtonProps) {
    return (
        <Button onPress={onPress}>
            <ImageContainer>
                <Svg />
            </ImageContainer>
            <Text>
                {title}
            </Text>
        </Button>
    );
}