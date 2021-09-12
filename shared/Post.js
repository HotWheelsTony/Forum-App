import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Divider, Icon} from "react-native-elements";


const styles = StyleSheet.create({
    ThreadScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
            <PostHeader/>
            <Divider color="black"/>
            <Text style={styles.PostTextStyle}>
                Hi guys, is anyone else panicking about the assignment due on Thursday? I'm only just getting
                started and I can't bloody think of any good ideas for an app so I hope I come up with something
                soon! Anyway, what are all you guys doing for yours? Maybe I need some inspiration.
            </Text>
        </View>
    );
}

function PostHeader() {
    return (
        <View>
            <View style={styles.PostHeaderContainer}>
                <Text style={styles.PostHeaderTextStyle}>
                    Poster Name
                </Text>
                <SeparatorDot/>
                <Text style={styles.PostInfoTextStyle}>
                    July 27, 4:20PM
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




















