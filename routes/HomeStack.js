import React from "react";
import HomeScreen from "../screens/Home";
import Thread from "../screens/Thread";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            initialRouteName: "Home"
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Thread" component={Thread}/>
        </Stack.Navigator>
    );
}
