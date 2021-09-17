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

export default function EOFFooter({option}) {
    return (
        <View style={styles.EOFContainer}>
            <Text style={styles.EOFStyle}>
                End of {option}
            </Text>
        </View>
    );
}
