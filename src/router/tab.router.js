import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="main"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                    tabBarLabel: 'Home'
                }}
            />
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
                    tabBarLabel: 'Settings'
                }}
            />
        </Tab.Navigator>
    )
}
