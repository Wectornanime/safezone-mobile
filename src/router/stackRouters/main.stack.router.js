import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import Alert from "../../screens/Alert";
import Details from "../../screens/Details";
import Report from "../../screens/Report";

const Stack = createNativeStackNavigator();

export default function MainStackRouter() {
    return (
        <Stack.Navigator screenOptions={{ title: '' }}>
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
            <Stack.Screen
                name="report"
                component={Report}
            />
        </Stack.Navigator>
    )
}
