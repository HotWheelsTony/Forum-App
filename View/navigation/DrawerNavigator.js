import React, {useEffect, useState} from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";
import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {Divider} from "react-native-elements";
import AppStack from "./AppStack";
import firestore from "@react-native-firebase/firestore";


const Drawer = createDrawerNavigator()

const styles = StyleSheet.create({
    DrawerContainer: {
        flex: 1,
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
        marginTop: 30,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#e0e0e0",
    },
    DrawerFooter: {
        color: "black",
        fontSize: 20,
        justifyContent: "flex-end",
    },
    Username: {
        fontFamily: "Roboto-Regular",
        color: 'black',
        fontSize: 20,
    },
    UserEmail: {
        fontFamily: "Roboto-Regular",
        color: 'black',
        fontSize: 15,
    },
    BookmarkContainer: {
        padding: 10,
    },
    BookmarkText: {
        fontFamily: "Roboto-Regular",
        color: 'black',
        fontSize: 20,
    },
});


export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props}/>}
                          screenOptions={{
                              headerShown: false,
                              initialRouteName: "ThreadBrowser"
                          }}>
            <Drawer.Screen name="ThreadBrowser" component={AppStack}/>
        </Drawer.Navigator>
    );
}

/*
The following variable and two functions
listen for live changes in the firestore
 */
let bookmarks = [];

firestore()
    .collection("users")
    .doc(auth().currentUser.uid)
    .collection("bookmarks")
    .orderBy("timestamp", "desc")
    .onSnapshot(onResult, onError);

function onResult(QuerySnapshot) {
    const list = [];
    QuerySnapshot.forEach((doc) => {
        const {
            content,
            timestamp,
        } = doc.data();
        list.push({
            id: doc.id,
            content: content,
            timestamp: timestamp,
        });
    });
    bookmarks = list;
    console.log("Fetched bookmarks");
}

function onError() {
    console.log("Error fetching bookmarks")
}

/*
Custom content for the drawer, organizes the header and footer
 */
function CustomDrawerContent(props) {
    return (
        <View style={styles.DrawerContainer}>
            <DrawerHeader navigation={props.navigation}/>
            <FlatList data={bookmarks}
                      extraData={bookmarks}
                      keyExtractor={(item) => item.id}
                      showsVerticalScrollIndicator={true}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate("Thread", item.id)}
                          >
                              <BookmarkEntry item={item}/>
                          </TouchableOpacity>
                      )}
            />
            <DrawerFooter navigation={props.navigation}/>
        </View>
    );
}


/*
Custom header for the drawer, displays current user info
 */
export function DrawerHeader(props) {
    return (
        <View>
            <TouchableOpacity style={styles.DrawerHeader}
                              activeOpacity={0.7}
                              onPress={() => props.navigation.navigate("Account")}>
                <View>
                    <Text style={styles.Username}>
                        {auth().currentUser.displayName}
                    </Text>
                    <Text style={styles.UserEmail}>
                        {auth().currentUser.email}
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


function BookmarkEntry({item}) {
    return (
        <Text style={styles.DrawerItem}>
            {item.content.length > 20 ? item.content.substring(0, 20) + "..." : item.content}
        </Text>
    );
}

/*
Custom footer for the drawer, navigates to settings
 */
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
