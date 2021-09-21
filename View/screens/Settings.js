import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CustomHeader from "../shared/CustomHeader";
import {Divider} from "react-native-elements/dist/divider/Divider";

const styles = StyleSheet.create({
    SettingsScreenContainer: {
        flex: 1,
        flexDirection: "column",
    },
    SectionContainer: {
        padding: 20,
    },
    SectionText: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: "black",
    },
})

export default function SettingsScreen(props) {
    /*
    Simple settings screen, with links to general
    and account settings
    */
    return (
        <View style={styles.SettingsScreenContainer}>
            <CustomHeader title="Settings" navigation={props.navigation}/>
            <TouchableOpacity style={styles.SectionContainer} onPress={() => alert("Not implemented!")}>
                <Text style={styles.SectionText}>General</Text>
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.SectionContainer} onPress={() => props.navigation.navigate("Account")}>
                <Text style={styles.SectionText}>Account</Text>
            </TouchableOpacity>
            <Divider/>
        </View>
    );
}
