import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button, ImageContainer, Text } from './styles';
interface SignInSocialButtonProps {
    title: string;
    svg: React.FC<SvgProps>
}

export function SignInSocialButton({ title, svg: Svg, ...rest }: SignInSocialButtonProps) {
    return (
        <Button {...rest}>
            <ImageContainer>
                <Svg />
            </ImageContainer>
            <Text>
                {title}
            </Text>
        </Button>
    );
}