import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Divider, Icon} from "react-native-elements";


const styles = StyleSheet.create({
    PostContainer: {
        backgroundColor: '#dde6f2',
        borderRadius: 20,
        margin: 5,
        paddingTop: 6,
        padding: 10,
    },
    PostTextStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    PostHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    PostHeaderTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Medium"
    },
    PostInfoTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
});


export default function Post(props) {
    return (
        <View style={styles.PostContainer}>
            <PostHeader timestamp={props.item.timestamp}
                        username={props.item.posterUsername}
            />
            <Divider color="black"/>
            <Text style={styles.PostTextStyle}>
                {props.item.content}
            </Text>
        </View>
    );
}

function PostHeader(props) {
    return (
        <View>
            <View style={styles.PostHeaderContainer}>
                <Text style={styles.PostHeaderTextStyle}>
                    {props.username}
                </Text>
                <SeparatorDot/>
                <Text style={styles.PostInfoTextStyle}>
                    {props.timestamp}
                </Text>
                <SeparatorDot/>
                <Text style={styles.PostInfoTextStyle}>
                    0 Replies
                </Text>
                <View style={{
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                }}>
                    <Icon
                        name="more-vert"
                        size={20}
                        onPress={() => alert("Not implemented!")}
                    />
                </View>
            </View>

        </View>

    )
        ;
}

function SeparatorDot() {
    return (
        <Icon
            name="circle"
            type="MaterialIcons"
            color="black"
            size={5}
            style={{
                marginLeft: 5,
                marginRight: 5,
            }}
        />
    );
}




















