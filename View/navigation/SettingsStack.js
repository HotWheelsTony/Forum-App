import React from "react";
import SettingsScreen from "../screens/Settings";
import AccountScreen from "../screens/Account";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            initialRouteName: "Settings"
        }}>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Account" component={AccountScreen}/>
        </Stack.Navigator>
    );
}
