/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebase} from "@react-native-firebase/database";

const firebaseConfig = {
    databaseURL: "https://swen325-a1-db-e8a03-default-rtdb.firebaseio.com/",
    projectId: "swen325-a1-db-e8a03",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
