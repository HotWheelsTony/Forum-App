import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Divider, Icon} from "react-native-elements";
import {Menu, MenuItem} from "react-native-material-menu";


const styles = StyleSheet.create({
    PostContainer: {
        backgroundColor: '#dde6f2',
        borderRadius: 20,
        margin: 5,
        paddingTop: 6,
        padding: 10,
        elevation: 2,
    },
    PostTextStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
    },
    PostHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    PostHeaderTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Medium"
    },
    PostInfoTextStyle: {
        fontSize: 15,
        fontFamily: "Roboto-Light",
    },
});


export default function Post(props) {
    const numReplies = props.item.replies ? 1 : 0;
    return (
        <View style={styles.PostContainer}>
            <PostHeader displayTimestamp={props.item.displayTimestamp}
                        username={props.item.posterUsername}
                        numReplies={numReplies}
                        navigation={props.navigation}
            />
            <Divider color="black"/>
            <Text style={styles.PostTextStyle}>
                {props.item.content}
            </Text>
        </View>
    );
}

function PostHeader(props) {
    return (
        <View>
            <View style={styles.PostHeaderContainer}>
                <Text style={styles.PostHeaderTextStyle}>
                    {props.username}
                </Text>
                <SeparatorDot/>
                <Text style={styles.PostInfoTextStyle}>
                    {props.displayTimestamp}
                </Text>
                <SeparatorDot/>
                <Text style={styles.PostInfoTextStyle}>
                    {props.numReplies} Replies
                </Text>
                <View style={{
                    justifyContent: "flex-end",
                    marginLeft: "auto",
                }}>
                    <PostOptions navigation={props.navigation}/>

                    {/*<Icon*/}
                    {/*    name="more-vert"*/}
                    {/*    size={20}*/}
                    {/*    onPress={() => alert("Not implemented!")}*/}
                    {/*/>*/}
                </View>
            </View>

        </View>
    );
}

function PostOptions(props) {
    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    return (
        <Menu
            visible={visible}
            anchor={<Icon
                name="more-vert"
                size={20}
                onPress={showMenu}
            />}
            onRequestClose={hideMenu}
        >
            <MenuItem onPress={hideMenu}>Reply</MenuItem>
            <MenuItem onPress={hideMenu}>Report</MenuItem>
            {/*<MenuDivider/>*/}
            <MenuItem onPress={hideMenu}>Delete</MenuItem>
        </Menu>
    );
}

function SeparatorDot() {
    return (
        <Icon
            name="circle"
            type="MaterialIcons"
            color="black"
            size={5}
            style={{
                marginLeft: 5,
                marginRight: 5,
            }}
        />
    );
}




















