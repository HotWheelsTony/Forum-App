import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import CustomHeader from "../shared/CustomHeader";

const styles = StyleSheet.create({
    AccountScreenContainer: {
        flex: 1,
        flexDirection: "column",
    },
})

export default function AccountScreen(props) {
    return (
        <View style={styles.AccountScreenContainer}>
            <CustomHeader title="Account" navigation={props.navigation}/>
            <Text>Account Screen</Text>
        </View>
    );
}
