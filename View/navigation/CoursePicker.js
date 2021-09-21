import React, {useState} from "react";
import {Menu, MenuItem} from "react-native-material-menu";
import {Icon} from "react-native-elements";
import {Text, TouchableOpacity, View} from "react-native";


/*
Un finished, meant to be dropdown course picker
to switch between courses in the browser but time didn't allow
 */
export default function CoursePicker() {
    const [visible, setVisible] = useState(false);
    const [course, setCourse] = useState("SWEN325");
    const hideMenu = (course) => {setVisible(false); setCourse(course)}
    const showMenu = () => setVisible(true);

    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",

        }}>
            <Text style={{
                fontFamily: "Roboto-Regular",
                fontSize: 20,
            }}>
                {course}
            </Text>
            <Menu
                visible={visible}
                anchor={<Icon
                    name="arrow-drop-down"
                    size={30}
                    onPress={showMenu}
                />}
                onRequestClose={hideMenu}
            >

                <MenuItem onPress={() => hideMenu("COMP361")}>COMP361</MenuItem>
                <MenuItem onPress={() => hideMenu("CYBR372")}>CYBR372</MenuItem>
                <MenuItem onPress={() => hideMenu("SWEN325")}>SWEN325</MenuItem>
                <MenuItem onPress={() => hideMenu("COMP309")}>COMP309</MenuItem>

            </Menu>
        </View>
    );
}
