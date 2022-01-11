import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppStackRoutes } from './app.stack.routes';
import { MyCats } from '../screens/MyCats';
import HomeSvg from '../assets/home.svg';
import CatSvg from '../assets/cat.svg';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
        const theme = useTheme();
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
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <HomeSvg width={24} height={24} fill={focused ? theme.colors.header : color} />
                    )
                }}
                component={AppStackRoutes}
            />
            <Screen
                name="MyCats"
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <CatSvg width={24} height={24} fill={focused ? theme.colors.header : color} />
                    )
                }}
                component={MyCats}
            />
        </Navigator>
    );
}