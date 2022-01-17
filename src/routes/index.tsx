import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabRoutes } from './app.tab.routes';
import { AppStackRoutes } from './app.stack.routes';
import { useAuth } from '../hooks/AuthContext';
import { AuthStack } from './auth.routes';

export function Routes() {
    const {user} = useAuth();
    return (
        <NavigationContainer>
            {user.id ? <AppTabRoutes/> : <AuthStack/>}
        </NavigationContainer>
    )
}