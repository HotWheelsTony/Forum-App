import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
import ThreadHeader from "../shared/ThreadHeader";
import Post from "../shared/Post";
import firestore from "@react-native-firebase/firestore";

const styles = StyleSheet.create({
    ThreadScreenContainer: {
        flex: 1,
    },
    EOFStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
})

export default function Thread(props) {
    const [post, setPost] = useState(null);
    const postId = props.route.params;

    const fetchPost = async () => {
        await firestore()
            .collection("posts")
            .doc(postId)
            .get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    //console.log("Fetched thread " + documentSnapshot.data());
                    setPost(documentSnapshot.data());
                    post.id = postId
                }
            }).catch((error) => {
                console.log("Error fetching thread: " + error);
            });
    }

    useEffect(() => {
        fetchPost().then(() => {
            console.log("Refreshed thread screen with new post id: " + postId);
        });
    }, [postId]);

    return (postId !== undefined && postId !== null) && (post !== null && post !== undefined) ? (
        <View style={styles.ThreadScreenContainer}>
            <ThreadHeader navigation={props.navigation}
                          item={post}
                          postId={postId}/>
            <ScrollView>
                <Post navigation={props.navigation}
                      item={post}/>
            </ScrollView>
        </View>
    ) : (
        <View style={styles.ThreadScreenContainer}>
            <Text style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}>
                Loading
            </Text>
        </View>

    );
}

