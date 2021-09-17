import React from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export function BookmarkThread(item, postId) {
    firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .collection("bookmarks")
        .doc(postId)
        .set({
            content: item.content,
            timestamp: firestore.Timestamp.fromDate(new Date()).seconds,
        }).then(() => console.log("Thread bookmarked"));
}

export function RemoveBookmark(postId) {
    firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .collection("bookmarks")
        .doc(postId)
        .delete().then(() => console.log("Bookmark deleted"));
}

export function GetPost(postId) {
    console.log("Post id to be fetched " + postId)
    firestore()
        .collection("posts")
        .doc(postId)
        .get()
        .then(() => {
            console.log("Fetched thread " + postId);
        })
        .catch(error => {
            console.log("Error fetching thread " + postId + " " + error);
        });
}


