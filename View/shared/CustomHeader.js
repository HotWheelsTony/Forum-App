import React from "react";
import {StyleSheet} from "react-native";
import {Header} from "react-native-elements";
import BackButton from "./BackButton";

const styles = StyleSheet.create({
    HeaderText: {
        marginRight: "auto",
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
});

export default function CustomHeader(props) {
    return (
        <Header
            elevated={true}
            barStyle="default"
            backgroundColor="#e0e0e0"
            leftComponent={<BackButton navigation={props.navigation}/>}
            centerComponent={{
                style: styles.HeaderText,
                text: props.title,
            }}
        />
    );
}

