import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from "react-native-device-info/src/index";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    //Helper method to check in the device has a finger print or passcode set
    const passcodeSet = () => {
        DeviceInfo.isPinOrFingerprintSet().then((isPinOrFingerprintSet) => {
            return isPinOrFingerprintSet;
        });
    }

    //return the auth context with login, signup, and logout functions
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    if (!passcodeSet) {return;}
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log("Sign in failed" + e);
                    }
                },
                register: async (username, email, password) => {
                   if (!passcodeSet) {return;}
                    try {
                        await auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(() => {
                                writeUserData(username, email)
                                console.log("User created!")
                            })
                            .catch((e) => {
                                console.log("Signup failed " + e);
                            });
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log("Sign out failed " + e);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
}

/*
Helper function to write given user data
to the database
 */
function writeUserData(username, email) {
    auth().currentUser.updateProfile({
        displayName: username,
    }).then(() => console.log("Updated username"))

    firestore()
        .collection("users")
        .doc(auth().currentUser.uid)
        .set({
            email: email,
            username: username,
        }).then(() => console.log("Oh my god please work"))

}
