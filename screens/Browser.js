import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, ActivityIndicator} from "react-native";
import ThreadBrowserHeader from "../shared/ThreadBrowserHeader";
import NewPostButton from "../constants/NewPostButton";
import firestore from "@react-native-firebase/firestore";
import Post from "../shared/Post";


const styles = StyleSheet.create({
    HomeScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    PostContainer: {
        backgroundColor: "#dde6f2",
        borderRadius: 10,
        marginTop: 10,
    },
    PostContentStyle: {
        fontSize: 20,
    },
    NewPostButtonContainer: {
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'flex-end'
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 30,
        // position: 'absolute',
        // bottom: 20,
        // right: 20,
    }
})

export default function HomeScreen(props) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection("posts")
            .onSnapshot(snapshot => {
                const posts = [];
                snapshot.forEach(doc => {
                    const {
                        content,
                        posterUsername,
                        timestamp,
                        replies,
                    } = doc.data();
                    posts.push({
                        id: doc.id,
                        content: content,
                        posterUsername: posterUsername,
                        timestamp: timestamp,
                        replies,
                    });
                });
                setPosts(posts);
                setLoading(false);
            });
        //return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator/>;
    }

    return (
        <View style={styles.HomeScreenContainer}>
            <ThreadBrowserHeader navigation={props.navigation}/>
            <FlatList data={posts}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={0.7}
                                            onPress={() => props.navigation.navigate("Thread", item)}
                          >
                              <Post navigation={props.navigation}
                                    item={item}
                              />
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
