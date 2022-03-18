import React, { useState } from 'react';
import { ActivityIndicator, Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import GoogleSvg from '../../assets/google.svg';
import catLogo from '../../assets/cat.png';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/AuthContext';
import {
    Container,
    Header,
    Logo,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const { signInWithGoogle } = useAuth();
    const theme = useTheme();

    async function handleSignInWithGoogle() {
        try {
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Can not connect with Google Account');
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <TitleWrapper>
                    <Logo 
                              source={catLogo}
                              width={30}
                              height={30}
                    />
                </TitleWrapper>
                <SignInTitle>
                    SignIn and 
                    have fun!
                </SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title="SignIn with Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                </FooterWrapper>
                {isLoading &&
                    <ActivityIndicator
                        color={theme.colors.shape}
                        style={{ marginTop: 18 }}
                    />
                }
            </Footer>
        </Container>
    )
}