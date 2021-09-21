import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

/*
Submit a post to the data base with
the posters username
 */
export async function submitPost(content) {
    const date = new Date();
    await firestore()
        .collection("posts")
        .add({
            posterUsername: auth().currentUser.displayName,
            content: content,
            displayTimestamp: getDisplayTimestamp(),
            timestamp: firestore.Timestamp.fromDate(date).seconds,
        }).then((docRef) => {
            addOpReply(docRef.id, content);
            console.log("Post created!");
        }).catch(error => {
            console.log("Error creating post " + error);
        });
}

/*
Adds the initial post as the first reply in the
post's thread, this is used for displaying threads
 */
async function addOpReply(postId, content) {
    const date = new Date();
    await firestore()
        .collection("posts")
        .doc(postId)
        .collection("replies")
        .doc(postId)
        .set({
            posterUsername: auth().currentUser.displayName,
            content: content,
            displayTimestamp: getDisplayTimestamp(),
            timestamp: firestore.Timestamp.fromDate(date).seconds,
        }).then(() => {
            console.log("Reply posted!");
        }).catch(error => {
            console.log("Error posting reply " + error);
        });
}

/*
Post a reply to the given post id
 */
export async function submitReply(postId, content) {
    const date = new Date();
    await firestore()
        .collection("posts")
        .doc(postId)
        .collection("replies")
        .add({
            posterUsername: auth().currentUser.displayName,
            content: content,
            displayTimestamp: getDisplayTimestamp(),
            timestamp: firestore.Timestamp.fromDate(date).seconds,
        }).then(() => {
            console.log("Reply posted!");
        }).catch(error => {
            console.log("Error posting reply " + error);
        });
}

/*
Utility function for getting the display timestamp
for posts and replies
 */
function getDisplayTimestamp() {
    const date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return  monthNames[parseInt(date.getMonth())]
        + " " + date.getDate() + " "
        + date.getHours() + ":"
        + date.getMinutes();
}
