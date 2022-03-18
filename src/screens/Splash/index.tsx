import React, { useEffect } from 'react';
import LogoSvg from '../../assets/catSvg.svg';
import { useNavigation } from '@react-navigation/native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';
import {
    Container

} from './styles';


export function Splash() {
    const navigation = useNavigation<any>();
    const splashAnimation = useSharedValue(0);
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })

    function startApp() {
        navigation.navigate('SignIn')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 1000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        );
    }, []);

    return (
        <Container>
            <Animated.View style={[logoStyle, { position: 'absolute' }]}  >
                <LogoSvg width={120} height={120} />
            </Animated.View>
        </Container>
    );
}
