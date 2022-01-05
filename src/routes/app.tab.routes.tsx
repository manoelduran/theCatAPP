import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';
import { MyCats } from '../screens/MyCats';
import { SignIn } from '../screens/SignIn';
import { Platform } from 'react-native';
import theme from '../styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 50,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    backgroundColor: theme.colors.background_primary
                },
            }}
        >
            <Screen
                name="AppStackRoutes"
                component={AppStackRoutes}
            />
            <Screen
                name="MyCats"
                component={MyCats}
            />
        </Navigator>
    );
}