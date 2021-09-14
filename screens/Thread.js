import React from 'react';
import {View, StyleSheet, ScrollView} from "react-native";
import ThreadHeader from "../shared/ThreadHeader";
import Post from "../shared/Post";

const styles = StyleSheet.create({
    ThreadScreenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default function Thread(props) {
    return (

        <View style={styles.ThreadScreenContainer}>
            <ThreadHeader navigation={props.navigation}/>
            <ScrollView>
                <Post navigation={props.navigation}
                      item={props.route.params}/>
            </ScrollView>

        </View>
    );
}
