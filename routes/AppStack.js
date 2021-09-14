import React from "react";
import HomeScreen from "../screens/Browser";
import Thread from "../screens/Thread";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/Settings";
import AccountScreen from "../screens/Account";
import CreatePostScreen from "../screens/CreatePost";

const Stack = createStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            initialRouteName: "Home"
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Thread" component={Thread}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
            <Stack.Screen name="Account" component={AccountScreen}/>
            <Stack.Screen name="CreatePost" component={CreatePostScreen}/>
        </Stack.Navigator>
    );
}
