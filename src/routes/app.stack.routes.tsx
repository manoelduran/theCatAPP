import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cat } from '../screens/Cat';
import { Home } from '../screens/Home';
import { MyCats } from '../screens/MyCats';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator initialRouteName="Home">
            <Screen
                name="Home"
                options={{
                    headerShown: false,
                    gestureEnabled: false
                }}
                component={Home}
            />
            <Screen
                name="Cat"
                options={{
                    headerShown: false
                }}
                component={Cat}
            />
            <Screen
                name="MyCats"
                options={{
                    headerShown: false
                }}
                component={MyCats}
            />
        </Navigator>
    );
}