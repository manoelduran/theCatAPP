import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Navigator initialRouteName="Splash">
                  <Screen
                name="Splash"
                options={{
                    headerShown: false
                }}
                component={Splash}
            />
            <Screen
                name="SignIn"
                options={{
                    headerShown: false
                }}
                component={SignIn} />
        </Navigator>
    );
}