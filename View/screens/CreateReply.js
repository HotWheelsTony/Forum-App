import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import CustomHeader from "../shared/CustomHeader";
import {Input} from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {submitReply} from "../../Controller/Posting";

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


export default function CreateReplyScreen(props) {
    const [content, setContent] = useState();
    const postId = props.route.params;

    return (
        <View style={styles.CreatePostScreenContainer}>
            <CustomHeader title="Reply" navigation={props.navigation}/>
            <View style={styles.InputContainer}>
                <Input
                    multiline={true}
                    label="Reply content"
                    leftIcon={<MaterialIcons
                        name="reply"
                        color="#e0e0e0"
                        size={30}/>}
                    placeholder="Start typing..."
                    onChangeText={(content) => setContent(content)}
                />
                <View style={styles.SubmitContainer}>
                    <TouchableOpacity activeOpacity={0.7}
                                      onPress={() => {
                                          submitReply(postId, content).then(() => props.navigation.goBack())
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
