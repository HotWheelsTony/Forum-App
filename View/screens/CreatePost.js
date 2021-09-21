import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import CustomHeader from "../shared/CustomHeader";
import {Input} from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {submitPost} from "../../Controller/Posting";

const styles = StyleSheet.create({
    CreatePostScreenContainer: {

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

    /*
    Create post screen, displays a simple text input field
    for user to enter text, then submit
     */
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
                                          submitPost(content).then(() => props.navigation.navigate("Home"))
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

