import React, {useContext, useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {AuthContext} from "../../Controller/Auth";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    SignInScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },
    FormContainer: {
        marginTop: 180,
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
    CreateAccount: {
        flexDirection: "row",
        margin: 20,
        color: "#b6b6b6",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    CreateAccountText: {
        fontFamily: "Roboto-Regular",
        color: "#b6b6b6",
        fontSize: 20,
    },
    LoginButtonActive: {
        margin: 10,
        width: 150,
        flexDirection: "row",
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    LoginButtonInActive: {
        margin: 10,
        width: 150,
        flexDirection: "row",
        backgroundColor: "rgba(224,224,224,0.49)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    LoginTextActive: {
        padding: 10,
        fontSize: 20,
        color: "black",
        fontFamily: 'Roboto-Regular',
    },
    LoginTextInActive: {
        padding: 10,
        fontSize: 20,
        color: "rgba(0,0,0,0.5)",
        fontFamily: 'Roboto-Regular',
    }
})


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);

    return (
        <View style={styles.SignInScreenContainer}>
            <View style={styles.FormContainer}>
                <Text style={styles.Header}>
                    Sign In
                </Text>
                <InputField value={email}
                            placeholder="Email"
                            onChangeText={(userEmail) => {
                                setEmail(userEmail)
                            }}
                            icon="email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                />

                <InputField value={password}
                            placeholder="Password"
                            onChangeText={(userPassword) => {
                                setPassword(userPassword)
                            }}
                            icon="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                />

                <TouchableOpacity disabled={!email || !password}
                                  style={(!email || !password) ? styles.LoginButtonInActive : styles.LoginButtonActive}
                                  onPress={() => login(email, password)}>
                    <Text style={(!email || !password) ? styles.LoginTextInActive : styles.LoginTextActive}>
                        Login
                    </Text>
                    <MaterialIcons name="login"
                                   size={30}
                                   color={(!email || !password) ? "rgba(0,0,0,0.5)" : "black"}
                    />

                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}
                              activeOpacity={1}
                              style={styles.CreateAccount}>
                <Text style={styles.CreateAccountText}>
                    Or create an account
                </Text>
                <MaterialIcons name="open-in-new"
                               color="#b6b6b6"
                               size={20}
                               style={{
                                   padding: 5,
                               }}
                />
            </TouchableOpacity>

        </View>
    );
}


export function InputField({value, placeholder, icon, ...rest}) {
    return (
        <View style={styles.InputContainer}>
            <View style={styles.Input}>
                <MaterialIcons color="#b6b6b6"
                               size={30}
                               name={icon}
                />
                <TextInput value={value}
                           numberOfLines={1}
                           placeholder={placeholder}
                           placeholderTextColor="#b6b6b6"
                           style={styles.Input}
                           {...rest}
                />

            </View>
        </View>
    );
}
