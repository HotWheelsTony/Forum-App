import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log("Sign in failed" + e);
                    }
                },
                register: async (username, email, password) => {
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
