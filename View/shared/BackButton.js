import {TouchableOpacity, View} from "react-native";
import {Icon} from "react-native-elements";
import React from "react";

/*
A simple back button component which
is used by multiple screens, its passed a navigation
prop which it uses to navigate to the previous screen in the stack
 */
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
