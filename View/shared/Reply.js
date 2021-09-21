import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Divider, Icon} from "react-native-elements";
import {Menu, MenuItem} from "react-native-material-menu";


const styles = StyleSheet.create({
    ReplyContainer: {
        margin: 5,
        paddingTop: 6,
        padding: 10,
    },
    ReplyTextStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    ReplyHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    ReplyHeaderTextStyle: {
        fontSize: 16,
        fontFamily: "Roboto-Medium"
    },
    ReplyInfoTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
    ReplyingInfoContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",

    },
    ReplyingBackground: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e0e0e0",
    },
    ReplyingUsername: {
        fontSize: 13,
        fontFamily: "Roboto-Medium",
        paddingLeft: 3,
    },
    ReplyingContent: {
        fontSize: 13,
        fontFamily: "Roboto-Light",
    },
});

/*
Component for displaying a reply, props contains
the post id of the post to be rendered and the post item
 */
export default function Reply(props) {
    return (
        <View style={styles.ReplyContainer}>
            <ReplyHeader displayTimestamp={props.item.displayTimestamp}
                         username={props.item.posterUsername}
                         postId={props.postId}
            />

            <ReplyingInfo originalPost={props.originalPost}/>

            <Text style={styles.ReplyTextStyle}>
                {props.item.content}
            </Text>
            <Divider style={{
                paddingTop: 6,
            }} color="black"/>
        </View>
    );
}

function ReplyingInfo(props) {
    return (
        <View style={styles.ReplyingInfoContainer}>
            <Icon name="keyboard-return"
                  color="#02738C"
                  size={20}
                  style={{
                      transform: [{scaleX: -1}]
                  }}
            />
            <View style={styles.ReplyingBackground}>
                <Text style={styles.ReplyingUsername}>
                    {props.originalPost.posterUsername}
                </Text>
                <SeparatorDot/>
                <Text style={styles.ReplyingContent}>
                    {props.originalPost.content.length > 20
                        ? props.originalPost.content.substring(0, 20) + "..."
                        : props.originalPost.content}
                </Text>
            </View>
        </View>
    );
}

function ReplyHeader(props) {
    return (
        <View style={styles.ReplyHeaderContainer}>
            <Text style={styles.ReplyHeaderTextStyle}>
                {props.username}
            </Text>
            <SeparatorDot/>
            <Text style={styles.ReplyInfoTextStyle}>
                {props.displayTimestamp}
            </Text>
            <View style={{
                justifyContent: "flex-end",
                marginLeft: "auto",
            }}>
                <ReplyOptions/>
            </View>
        </View>
    );
}


function ReplyOptions() {
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    return (
        <Menu
            visible={visible}
            anchor={<Icon
                name="more-vert"
                size={20}
                onPress={showMenu}
            />}
            onRequestClose={hideMenu}
        >
            <MenuItem onPress={hideMenu}>Reply</MenuItem>
            <MenuItem onPress={hideMenu}>Report</MenuItem>
            <MenuItem onPress={hideMenu}>Delete</MenuItem>

        </Menu>
    );
}

/*
Component for displaying the header of the post,
including poster name, timestamp, and number of replies
 */
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





















