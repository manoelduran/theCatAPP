import React from 'react';
import { Home } from './src/screens/Home';
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
   <CatProvider>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
   </CatProvider>
  );
}
