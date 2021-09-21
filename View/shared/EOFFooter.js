import {StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    EOFContainer: {
        alignItems: "center",
    },
    EOFStyle: {
        fontFamily: "Roboto-Light",
        fontSize: 11,
        color: "black",
    },
})

/*
Simple end of field footer for browser and
thread screens
 */
export default function EOFFooter({option}) {
    return (
        <View style={styles.EOFContainer}>
            <Text style={styles.EOFStyle}>
                End of {option}
            </Text>
        </View>
    );
}
