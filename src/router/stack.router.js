import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Alert from "../screens/Alert";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

export default function StackRouter() {
    return (
        <Stack.Navigator screenOptions={{title: ''}}>
            <Stack.Screen
                name="home"
                component={Home}
            />
            <Stack.Screen
                name="alert"
                component={Alert}
            />
            <Stack.Screen
                name="details"
                component={Details}
            />
        </Stack.Navigator>
    )
}
