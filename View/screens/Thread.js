import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, FlatList} from "react-native";
import ThreadHeader from "../shared/ThreadHeader";
import Post from "../shared/Post";
import firestore from "@react-native-firebase/firestore";
import EOFFooter from "../shared/EOFFooter";
import Reply from "../shared/Reply";

const styles = StyleSheet.create({
    ThreadScreenContainer: {
        flex: 1,
    },
    EOFStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
})

export default function ThreadScreen(props) {
    const [op, setOp] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const postId = props.route.params;

    const onRefresh = () => {
        setLoading(true);
        getPosts().then(() => {
            console.log("Posts fetched in onRefresh")
        });
    }

    const getPosts = async () => {
        try {
            const list = [];
            await firestore()
                .collection("posts")
                .doc(postId)
                .collection("replies")
                .orderBy("timestamp", "asc")
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        const {
                            content,
                            posterUsername,
                            timestamp,
                            displayTimestamp,
                        } = doc.data();
                        list.push({
                            id: doc.id,
                            content: content,
                            posterUsername: posterUsername,
                            timestamp: timestamp,
                            displayTimestamp: displayTimestamp,
                        });
                    });
                });
            setPosts(list);
            setOp(list[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts().then(() => {
        });
    }, [postId]);


    // const [post, setPost] = useState(null);

    //
    // const fetchPost = async () => {
    //     await firestore()
    //         .collection("posts")
    //         .doc(postId)
    //         .get()
    //         .then(documentSnapshot => {
    //             if (documentSnapshot.exists) {
    //                 setPost(documentSnapshot.data());
    //                 post.id = postId
    //             }
    //         }).catch((error) => {
    //             console.log("Error fetching thread: " + error);
    //         });
    // }
    //
    // useEffect(() => {
    //     fetchPost().then(() => {
    //         console.log("Refreshed thread screen with new post id: " + postId);
    //     });
    // }, [postId]);

    return (postId !== null) && (op !== null) && (posts !== null) ? (
        <View style={styles.ThreadScreenContainer}>
            <ThreadHeader navigation={props.navigation}
                          item={posts[0]}
                          postId={postId}/>

            <FlatList data={posts}
                      onRefresh={() => onRefresh()}
                      refreshing={loading}
                      ListFooterComponent={<EOFFooter option="replies"/>}
                      renderItem={({item}) => {
                          return (item.id === postId)
                              ? (
                                  <Post navigation={props.navigation}
                                        item={item}
                                        postId={item.id}/>
                              ) : (
                                  <Reply item={item}
                                         postId={item.id}
                                         originalPost={op}/>
                              );
                      }}

                      keyExtractor={(item) => item.id}
                      showsVerticalScrollIndicator={false}
            />

        </View>
    ) : (
        <View style={styles.ThreadScreenContainer}>
            <EOFFooter option="replies"/>
        </View>

    );
}

