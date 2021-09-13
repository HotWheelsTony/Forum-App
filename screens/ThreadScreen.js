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

export default function ThreadScreen({navigation}) {
    return (

        <View style={styles.ThreadScreenContainer}>
            <ThreadHeader navigation={navigation}/>
            <ScrollView>
                <Post navigation={navigation}/>
            </ScrollView>

        </View>
    );
}
