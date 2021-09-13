import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import ThreadBrowserHeader from "../shared/ThreadBrowserHeader";
import auth from "@react-native-firebase/auth";

export default function HomeScreen(props) {
    return (
        <View style={styles.HomeScreenContainer}>
            <ThreadBrowserHeader navigation={props.navigation} />
            <ScrollView>
                <Post navigation={props.navigation}/>
            </ScrollView>


        </View>
    );
}

function Post(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("Thread")}>
            <View style={styles.PostContainer}>
                <Text style={styles.PostContentStyle}>{auth().currentUser.email}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    HomeScreenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    PostContainer: {
        backgroundColor: "#dde6f2",
        borderRadius: 10,
        marginTop: 10,
    },
    PostContentStyle: {
        fontSize: 20,

    },
    NewPostButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
})
