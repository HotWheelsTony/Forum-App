import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Divider} from "react-native-elements";
import AppStack from "./AppStack";


const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
    DrawerContainer: {
        fontFamily: "Roboto-Regular",
        color: 'black',
        fontSize: 25,
        flex: 1,
        //flexDirection: "column",
        //justifyContent: "space-between",
    },
    DrawerItem: {
        fontSize: 20,
        padding: 10,
        color: "black",
    },
    ImageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    DrawerHeader: {
        flexDirection: "row",
        padding: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#e0e0e0",
    },
    DrawerFooter: {
        color: "black",
        fontSize: 20,
        justifyContent: "flex-end",
    }
});


export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent{...props}/>}
                          screenOptions={{
                              headerShown: false,
                              initialRouteName: "ThreadBrowser"
                          }}>
            <Drawer.Screen name="ThreadBrowser" component={AppStack}/>
        </Drawer.Navigator>
    );
}


function CustomDrawerContent(props) {
    return (
        <View style={styles.DrawerContainer}>

            <DrawerContentScrollView {...props}>
                <DrawerHeader navigation={props.navigation}/>

            </DrawerContentScrollView>

            <DrawerFooter navigation={props.navigation}/>

        </View>
    );
}


export function DrawerHeader(props) {
    return (
        <View>
            <TouchableOpacity style={styles.DrawerHeader}
                              onPress={() => props.navigation.navigate("Account")}>
                <View>
                    <Text>
                        name {auth().currentUser.displayName}
                    </Text>
                    <Text>
                        email {auth().currentUser.email}
                    </Text>
                </View>
                <Image source={{
                    uri: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
                }}
                       style={styles.ImageStyle}
                />
            </TouchableOpacity>
            <Divider/>
            <Text style={styles.DrawerItem}>Bookmarked Threads</Text>
            <Divider/>
        </View>
    );
}


function DrawerFooter(props) {
    return (
        <View style={styles.DrawerFooter}>
            <Divider/>
            <DrawerItem onPress={() => props.navigation.navigate("Settings")}
                        label={"Settings"}
                        labelStyle={styles.DrawerFooter}
                        icon={() => <MaterialIcons color={'black'}
                                                   size={30}
                                                   name={'settings'}
                                    />
                        }
            />
        </View>
    );
}
