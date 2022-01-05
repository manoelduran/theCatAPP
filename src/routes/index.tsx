import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabRoutes } from './app.tab.routes';
import { AuthStack } from './auth.routes';

export function Routes() {
    const user = "dasdsadas";
    return (
        <NavigationContainer>
            {user ? <AppTabRoutes /> : <AuthStack />}
        </NavigationContainer>
    )
}