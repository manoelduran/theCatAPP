import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabRoutes } from './app.tab.routes';
import { AppStackRoutes } from './app.stack.routes';

export function Routes() {
    return (
        <NavigationContainer>
            <AppStackRoutes />
        </NavigationContainer>
    )
}