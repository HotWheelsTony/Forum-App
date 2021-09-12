import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import BackButton from "./BackButton";

const styles = StyleSheet.create({
    headerText: {
        marginRight: "auto",
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
});

export default function ThreadHeader(props) {
    return (
        <Header
            elevated={true}
            barStyle="default"
            backgroundColor="#e0e0e0"
            leftComponent={<BackButton navigation={props.navigation}/>}
            centerComponent={{
                style: styles.headerText,
                text: "Thread",

            }}
            rightComponent={<RightHeaderComponent navigation={props.navigation}/>}
        />
    );
}

function RightHeaderComponent(props) {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Icon name="bookmark-outline"
                      color="black"
                      size={30}
                      style={{
                          marginRight: 10,
                      }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Not implemented!")}>
                <Icon name="refresh"
                      color="black"
                      size={30}
                />
            </TouchableOpacity>
        </View>
    );
}


