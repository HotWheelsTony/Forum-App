import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import ThreadBrowserHeader from "../shared/ThreadBrowserHeader";
import NewPostButton from "../shared/NewPostButton";
import Post from "../shared/Post";
import EOFFooter from "../shared/EOFFooter";
import firestore from "@react-native-firebase/firestore";
import {GetPosts} from "../../Controller/Fetching";


const styles = StyleSheet.create({
    HomeScreenContainer: {
        flex: 1,
    },
    NewPostButtonContainer: {
        flex: 1,
        position: 'absolute',
        bottom: 40,
        right: 40,
    }
})

export default function HomeScreen(props) {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    // (async () => {
    //     setPosts(await GetPosts());
    // })()

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
                .collection('posts')
                .orderBy('timestamp', 'desc')
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        const {
                            content,
                            posterUsername,
                            timestamp,
                            displayTimestamp,
                            replies,
                        } = doc.data();
                        list.push({
                            id: doc.id,
                            content: content,
                            posterUsername: posterUsername,
                            timestamp: timestamp,
                            displayTimestamp: displayTimestamp,
                            replies,
                        });
                    });
                });
            setPosts(list);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts().then(() => {});
    }, []);

    return (
        <View style={styles.HomeScreenContainer}>
            <ThreadBrowserHeader navigation={props.navigation}/>
            <FlatList data={posts}
                      onRefresh={() => onRefresh()}
                      refreshing={loading}
                      ListFooterComponent={<EOFFooter option="posts"/>}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate("Thread", item.id)}
                          >
                              <Post navigation={props.navigation}
                                    item={item}
                                    postId={item.id}/>
                          </TouchableOpacity>
                      )}
                      keyExtractor={(item) => item.id}
                      showsVerticalScrollIndicator={false}
            />
            <View style={styles.NewPostButtonContainer}>
                <NewPostButton navigation={props.navigation}/>
            </View>
        </View>
    );
}
