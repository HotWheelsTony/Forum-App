import React, {useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export function BookmarkThread(item) {
    firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .collection("bookmarks")
        .doc(item.id)
        .set({
            content: item.content,
            timestamp: firestore.Timestamp.fromDate(new Date()).seconds,
        }).then(() => console.log("Thread bookmarked"));
}



export function GetPost(thread) {

}

