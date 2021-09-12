import React, {useContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import {AuthContext} from "./AuthProvider";
import auth from "@react-native-firebase/auth";
import SettingsScreen from "../screens/Settings";

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(setInitializing) setInitializing(false);
    }

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, [])

    if(initializing) return null;

    return (
        <NavigationContainer>
            {user ? <SettingsScreen/> : <HomeScreen/>}
        </NavigationContainer>
    );
};

export default Routes;
