import React from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
import ThreadHeader from "../shared/ThreadHeader";
import Post from "../shared/Post";


const styles = StyleSheet.create({
    ThreadScreenContainer: {
        flex: 1,
    },
    EOFStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
})

export default function Thread(props) {
    return (
        <View style={styles.ThreadScreenContainer}>
            <ThreadHeader navigation={props.navigation}
                          item={props.route.params}/>
            <ScrollView>
                <Post navigation={props.navigation}
                      item={props.route.params}/>
            </ScrollView>
        </View>
    );
}
