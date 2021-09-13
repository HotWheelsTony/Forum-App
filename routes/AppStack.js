import React from "react";
import HomeScreen from "../screens/Browser";
import ThreadScreen from "../screens/ThreadScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            initialRouteName: "Home"
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Thread" component={ThreadScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Account" component={AccountScreen}/>
        </Stack.Navigator>
    );
}
