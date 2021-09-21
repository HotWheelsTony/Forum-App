import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Header, Icon} from "react-native-elements";
import CoursePicker from "../navigation/CoursePicker";


/*
Header for the browser screen
 */
export default function BrowserHeader(props) {
    return (
        <Header
            elevated={true}
            barStyle="default"
            backgroundColor="#e0e0e0"
            leftComponent={<LeftComponent navigation={props.navigation}/>}
            rightComponent={props.rightComponent}
        />
    );
}

/*
Left component of the header which is
a hamburger menu to open the drawer
 */
function LeftComponent(props) {
    return (
        <View style={{
            flexDirection: "row",
        }}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Icon name="menu"
                      size={30}
                      color="black"
                />
            </TouchableOpacity>
            <CoursePicker/>
        </View>
    );
}
