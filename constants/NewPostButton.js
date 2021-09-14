import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: "#F2884B",
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default function NewPostButton(props) {
    return (
        // <Button
        //     buttonStyle={{
        //         marginBottom: 20,
        //         marginRight: 20,
        //         width: 60,
        //         height: 60,
        //         borderRadius: 30,
        //         backgroundColor: "#F2884B",
        //         alignSelf: "flex-end",
        //
        //     }}
        //     containerStyle={{ margin: 20 }}
        //
        //     icon={
        //         <Icon
        //             name="border-color"
        //             size={35}
        //             color="#FFF"
        //         />
        //     }
        //
        //     onPress={() => alert("New post!")}
        //
        // />

        <TouchableOpacity activeOpacity={0.7}
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
