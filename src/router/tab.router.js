import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import StackRouter from "./stack.router";
import Settings from "../screens/Settings";
import Reports from "../screens/Reports";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="main"
                component={StackRouter}
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
            <Tab.Screen
                name="reports"
                component={Reports}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="alert-circle" color={color} size={size} />,
                    tabBarLabel: 'Reports'
                }}
            />
        </Tab.Navigator>
    )
}
