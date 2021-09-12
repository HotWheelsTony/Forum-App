import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-elements";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";


const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
    DrawerHeader: {
        fontFamily: "Roboto-Regular",
        color: 'black',
        fontSize: 25,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
    },
    DrawerSettings: {
        fontSize: 25,
        justifyContent: 'center',
    },
    DrawerItemStyle: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        padding: 1,
        color: "black",
    }
});


export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent{...props}/>}
                          screenOptions={{
            headerShown: false,
            initialRouteName: "ThreadBrowser"
        }}>

            <Drawer.Screen name="ThreadBrowser" component={HomeStack}/>
            <Drawer.Screen name="Settings" component={SettingsStack}/>

        </Drawer.Navigator>

    );
}


function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <Text style={styles.DrawerHeader}>Bookmarked Threads</Text>
                <Divider/>

                <DrawerItemList {...props}/>

            </DrawerContentScrollView>

            <View>
                <Divider/>
                <DrawerItem onPress={() => alert("Not implemented!")}
                            label={"Settings"}
                            labelStyle={styles.DrawerItemStyle}
                            icon={() => <MaterialIcons color={'black'}
                                                       size={30}
                                                       name={'settings'}/>}/>
            </View>
        </SafeAreaView>
    );
}
