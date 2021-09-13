import React, {useContext, useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";

import auth from "@react-native-firebase/auth";
import AuthStack from "../routes/AuthStack";
import {AuthContext} from "../authentication/Auth";
import DrawerNavigator from "../routes/DrawerNavigator";

export default function Routes() {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if(setInitializing) setInitializing(false);
    }

    useEffect(() => {
        return auth().onAuthStateChanged(onAuthStateChanged);
    }, [])

    if(initializing) {
        return null;
    }

    return (
        <NavigationContainer>
            {user ? <DrawerNavigator/> : <AuthStack/>}
        </NavigationContainer>
    );
}
