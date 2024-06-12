import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Reports from "../../screens/Reports";
import ReportsDetails from "../../screens/ReportsDetails";

const Stack = createNativeStackNavigator();

export default function ReportStackRouter() {
    return (
        <Stack.Navigator screenOptions={{ title: '' }}>
            <Stack.Screen
                name="reports"
                component={Reports}
            />
            <Stack.Screen
                name="reportsDetails"
                component={ReportsDetails}
            />
        </Stack.Navigator>
    )
}
