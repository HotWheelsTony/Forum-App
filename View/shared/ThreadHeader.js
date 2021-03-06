import React, {useEffect, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import BackButton from "./BackButton";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import {addBookmark, removeBookmark} from "../../Controller/Bookmarking";

const styles = StyleSheet.create({
    headerText: {
        marginRight: "auto",
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
});

/*
Displays the screen header for the thread screen,
which includes a back button, preview of the post content
and bookmark option
 */
export default function ThreadHeader(props) {
    const [bookmarked, setBookmarked] = useState();

    //check if this thread is bookmarked by the current user
    const checkBookmarks = async () => {
        await firestore()
            .collection("users")
            .doc(auth().currentUser.uid)
            .collection("bookmarks")
            .doc(props.postId)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    setBookmarked(true);
                } else {
                    setBookmarked(false);
                }
            });
    }

    useEffect(() => {
        checkBookmarks().then(() => {
            console.log("Checked bookmarks for post: " + props.postId)
        });
    }, [bookmarked, props.postId]);

    return (
        <Header
            elevated={true}
            barStyle="default"
            backgroundColor="#e0e0e0"
            leftComponent={
                <BackButton navigation={props.navigation}/>
            }
            centerComponent={{
                style: styles.headerText,
                text: props.item.content.length > 20
                    ? props.item.content.substring(0, 20) + "..."
                    : props.item.content,
            }}
            rightComponent={
                <TouchableOpacity onPress={() => {
                    setBookmarked(!bookmarked);
                    if (bookmarked) {
                        removeBookmark(props.postId).then(() => setBookmarked(false));
                    } else {
                        addBookmark(props.postId, props.item.content).then(() => setBookmarked(true));
                    }
                }}>
                    <Icon name={bookmarked ? "bookmark" : "bookmark-outline"}
                          color="black"
                          size={30}
                          style={{
                              marginRight: 10,
                          }}/>
                </TouchableOpacity>
            }
        />
    );
}



