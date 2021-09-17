import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {AuthContext} from "../../Controller/Auth";
import {InputField} from "./Login";


const styles = StyleSheet.create({
    RegisterScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    FormContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    InputContainer: {
        width: 300,
        margin: 10,
        flexDirection: "row",
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
    },
    Input: {
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
    },
    Header: {
        margin: 10,
        fontFamily: "Roboto-Medium",
        fontSize: 45,
    },
    SignupContainer: {
        flexDirection: "row",
        padding: 5,
        margin: 10,
        width: 180,
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    SignupText: {
        padding: 10,
        fontSize: 20,
        color: "black",
        fontFamily: 'Roboto-Regular',
    },
})

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const {register} = useContext(AuthContext);

    return (
        <View style={styles.RegisterScreenContainer}>
            <Text style={styles.Header}>
                Sign Up
            </Text>
            <View style={styles.FormContainer}>
                <InputField
                    labelValue={email}
                    onChangeText={(username) => setUsername(username)}
                    placeholder="Username"
                    icon="person"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <InputField
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholder="Email"
                    icon="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <InputField
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry={true}
                />

                <InputField
                    labelValue={confirmPassword}
                    onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                    placeholder="Confirm Password"
                    icon="lock"
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.SignupContainer}
                              onPress={() => {
                                  if (username && email && password && (password === confirmPassword)) {
                                      register(username, email, password)
                                  }
                              }}>
                <Text style={styles.SignupText}>
                    Create account
                </Text>

            </TouchableOpacity>

        </View>
    );
}
