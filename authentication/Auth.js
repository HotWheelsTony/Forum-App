import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

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
                register: async (email, password) => {
                    try {
                        await auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then(() => {console.log("User created!")})
                            .catch((e) => {
                                console.log("Signup failed" + e);
                            });
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log("Sign out failed" + e);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
}
