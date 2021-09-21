import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Divider, Icon} from "react-native-elements";
import {Menu, MenuItem} from "react-native-material-menu";
import firestore from "@react-native-firebase/firestore";

const styles = StyleSheet.create({
    PostContainer: {
        backgroundColor: '#dde6f2',
        borderRadius: 20,
        margin: 5,
        paddingTop: 6,
        padding: 10,
        elevation: 2,
    },
    PostTextStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    PostHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    PostHeaderTextStyle: {
        fontSize: 16,
        fontFamily: "Roboto-Medium"
    },
    PostInfoTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
});


/*
Component for displaying a post, props contains
the post id of the post to be rendered and the post item
 */
export default function Post(props) {
    const [numReplies, setNumReplies] = useState(0);

    const replies = async () => {
        await firestore()
            .collection("posts")
            .doc(props.postId)
            .collection("replies")
            .get()
            .then(colRef => {
                setNumReplies(colRef.size - 1);
            });
    }

    useEffect(() => {
        replies().then(() => {});
    }, []);

    return (
        <View style={styles.PostContainer}>
            <PostHeader displayTimestamp={props.item.displayTimestamp}
                        username={props.item.posterUsername}
                        numReplies={numReplies}
                        navigation={props.navigation}
                        postId={props.postId}
            />
            <Divider color="black"/>
            <Text style={styles.PostTextStyle}>
                {props.item.content}
            </Text>
        </View>
    );
}

/*
Component for displaying the header of the post,
including poster name, timestamp, and number of replies
 */
function PostHeader(props) {
    return (
        <View style={styles.PostHeaderContainer}>
            <Text style={styles.PostHeaderTextStyle}>
                {props.username}
            </Text>
            <SeparatorDot/>
            <Text style={styles.PostInfoTextStyle}>
                {props.displayTimestamp}
            </Text>
            <SeparatorDot/>
            <Text style={styles.PostInfoTextStyle}>
                {props.numReplies} Replies
            </Text>
            <View style={{
                justifyContent: "flex-end",
                marginLeft: "auto",
            }}>
                <PostOptions navigation={props.navigation}
                             postId={props.postId}
                />
            </View>
        </View>
    );
}

/*
Display the three dots for the post options, e.g. replying
on the right hand side of the post header
 */
function PostOptions(props) {
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
            <MenuItem onPress={() => {
                hideMenu();
                props.navigation.navigate("Reply", props.postId);
            }}>
                Reply
            </MenuItem>

            <MenuItem onPress={hideMenu}>Report</MenuItem>
            <MenuItem onPress={hideMenu}>Delete</MenuItem>

        </Menu>
    );
}

/*
Simple dot component which separates the different
parts of the post header
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





















