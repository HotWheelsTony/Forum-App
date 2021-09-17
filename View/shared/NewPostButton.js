import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: "#F2884B",
        elevation: 5,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default function NewPostButton(props) {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          style={styles.ButtonStyle}
                          onPress={() => props.navigation.navigate("CreatePost")}
        >
            <MaterialIcons name="edit"
                           color="white"
                           size={35}
            />
        </TouchableOpacity>

    );
}
