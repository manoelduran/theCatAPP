import React from 'react';
import LottieView from 'lottie-react-native';
import animatedLoad from '../../assets/animatedLoad.json';
import {
    Container
} from './styles';
export function LoadAnimation() {
    return (
        <Container>
            <LottieView
                source={animatedLoad}
                style={{ height: 200 }}
                resizeMode="contain" // ajusta a proporção da imagem
                autoPlay
                loop // caso demore mais para carregar os dados a animação não para
            />
        </Container>
    );
}