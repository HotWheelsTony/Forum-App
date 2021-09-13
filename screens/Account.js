import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";
import CustomHeader from "../shared/CustomHeader";
import {AuthContext} from "../authentication/Auth";
import {Divider} from "react-native-elements/dist/divider/Divider";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    AccountScreenContainer: {
        flex: 1,
        flexDirection: "column",
    },
    SectionContainer: {
        flexDirection: "row",
        padding: 20,
    },
    SectionText: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: "black",
        marginRight: 20,
    },
})

export default function AccountScreen(props) {
    const {logout} = useContext(AuthContext);

    return (
        <View style={styles.AccountScreenContainer}>
            <CustomHeader title="Account" navigation={props.navigation}/>
            <TouchableOpacity style={styles.SectionContainer} onPress={() => logout()}>
                <Text style={styles.SectionText}>Log out</Text>
                <MaterialIcons name="logout"
                               color="black"
                               size={30}
                />
            </TouchableOpacity>
            <Divider/>
        </View>
    );
}
