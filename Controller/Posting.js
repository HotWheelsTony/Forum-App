import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

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
