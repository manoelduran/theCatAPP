import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Navigator initialRouteName="SignIn">
            <Screen
                name="SignIn"
                options={{
                    headerShown: false
                }}
                component={SignIn} />
        </Navigator>
    );
}