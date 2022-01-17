import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { CatProvider } from './src/hooks/CatContext';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider } from './src/hooks/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <AuthProvider>
      <CatProvider>
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </CatProvider>
    </AuthProvider>
  );
}
