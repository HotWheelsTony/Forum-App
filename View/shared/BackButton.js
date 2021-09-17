import {TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import React from "react";

export default function BackButton(props) {
    return (
        <View style={{
            flexDirection: "row",
        }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back"
                      size={30}
                      color="black"
                />
            </TouchableOpacity>
        </View>
    );
}
