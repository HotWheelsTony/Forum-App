import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import CoursePicker from "../routes/CoursePicker";

export default function ThreadBrowserHeader(props) {
    return (

        <Header
            elevated={true}
            barStyle="default"
            backgroundColor="#e0e0e0"
            leftComponent={<LeftComponent navigation={props.navigation}/>}
            centerComponent={<CoursePicker/>}
            rightComponent={{
                icon: "refresh",
                size: 30,
                onPress: () => alert("Not implemented!"),
            }}
        />
    );
}


function LeftComponent(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Icon name="menu"
                      size={30}
                      color="black"
                />
            </TouchableOpacity>
        </View>
    );
}
