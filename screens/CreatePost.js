import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import CustomHeader from "../shared/CustomHeader";
import {Input} from "react-native-elements";
import auth from "@react-native-firebase/auth";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import firestore from "@react-native-firebase/firestore";

const styles = StyleSheet.create({
    CreatePostScreenContainer: {
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    InputContainer: {
        padding: 10,
    },
    SubmitContainer: {
        marginLeft: "auto",
        padding: 10,
    }
})


export default function CreatePostScreen(props) {
    const [content, setContent] = useState();
    return (

        <View style={styles.CreatePostScreenContainer}>
            <CustomHeader title="Create Post" navigation={props.navigation}/>
            <View style={styles.InputContainer}>
                <Input
                    multiline={true}
                    label="Post content"
                    leftIcon={<MaterialIcons
                        name="assignment"
                        color="#e0e0e0"
                        size={30}/>}
                    placeholder="Start typing..."
                    onChangeText={(content) => setContent(content)}
                />
                <View style={styles.SubmitContainer}>
                    <TouchableOpacity activeOpacity={0.7}
                                      onPress={() => {
                                          Submit(content, props.navigation)
                                              .then(() => props.navigation.navigate("Home"))
                                      }}
                    >
                        <MaterialIcons name="send"
                                       color="#02738C"
                                       size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


async function Submit(content) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date();
    const displayTimestamp = monthNames[parseInt(date.getMonth())] + " " + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();

    await firestore()
        .collection("posts")
        .add({
            posterUsername: auth().currentUser.displayName,
            content: content,
            displayTimestamp: displayTimestamp,
            timestamp: firestore.Timestamp.fromDate(date).seconds,
        }).then(() => {
            console.log("Post created!")
        }).catch(error => {
            console.log("Error creating post " + error)
        })
}
