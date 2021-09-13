import React from 'react';
import database from '@react-native-firebase/database';

export default function AddUser(userId) {
    database()
        .ref('/users/' + userId)
        .set({
            name: "Admin",
        }).then(() => console.log("Set data"));
}









