import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

/*
Remove the bookmark with the given postId
from the current users bookmarks collection
 */
export async function removeBookmark(postId) {
    await firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .collection("bookmarks")
        .doc(postId)
        .delete().then(() => console.log("Bookmark deleted"));
}

/*
Add a bookmark with teh given postId and content
to the current users bookmarks collection
 */
export async function addBookmark(postId, content) {
    console.log(postId)
    await firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .collection("bookmarks")
        .doc(postId)
        .set({
            content: content,
            timestamp: firestore.Timestamp.fromDate(new Date()).seconds,
        }).then(() => console.log("Thread bookmarked"));
}
