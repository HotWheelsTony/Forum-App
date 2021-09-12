import * as React from "react";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";

export default () => {
    return (
        <Button
            buttonStyle={{
                marginBottom: 20,
                marginRight: 20,
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "#F2884B",
                alignSelf: "flex-end",

            }}
            containerStyle={{ margin: 20 }}

            icon={
                <Icon
                    name="border-color"
                    size={35}
                    color="#FFF"
                />
            }

            onPress={() => alert("New post!")}

        />
    );
}
