import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity} from "react-native";
import CoursePicker from "../routes/CoursePicker";
import ThreadBrowserHeader from "../shared/ThreadBrowserHeader";

export default function HomeScreen(props) {
    return (
        <View style={styles.HomeScreenContainer}>
            <ThreadBrowserHeader navigation={props.navigation} />
            <ScrollView>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
                <Post navigation={props.navigation}/>
            </ScrollView>


        </View>
    );
}

function Post(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("Thread")}>
            <View style={styles.PostContainer}>
                <Text style={styles.PostContentStyle}>Post content hey guys is anyone else
                    struggling Post content hey guys is anyone else struggling Post content hey guys is anyone else
                    struggling with react</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    HomeScreenContainer: {
        //flex: 1,
        //flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //margin: 10
    },
    PostContainer: {
        //flex: 1,
        //alignSelf: '',
        backgroundColor: '#dde6f2',
        borderRadius: 10,

        //marginLeft: 1,
        marginTop: 10,
        //marginRight: 1
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
