import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'

import MainStackRouter from "./stackRouters/main.stack.router";
import Settings from "../screens/Settings";
import ReportStackRouter from "./stackRouters/reports.stack.router";

const Tab = createBottomTabNavigator();

export default function TabRouter() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="main">
            <Tab.Screen
                name="settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
                    tabBarLabel: 'Settings'
                }}
            />
            <Tab.Screen
                name="main"
                component={MainStackRouter}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                    tabBarLabel: 'Home'
                }}
            />
            
            <Tab.Screen
                name="reportsRouter"
                component={ReportStackRouter}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="alert-circle" color={color} size={size} />,
                    tabBarLabel: 'Reports'
                }}
            />
        </Tab.Navigator>
    )
}
