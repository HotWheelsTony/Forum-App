import React from "react";
import {firebase} from '@react-native-firebase/database';

const courses = []

export default function enumerateCourses() {
    let coursesData = firebase.database().ref("Courses");
    let courses = []


    coursesData.once('value', function (snapshot) {
        snapshot.forEach(function (item) {
             courses.push({
                 courseCode: item.key,
                 courseTitle: item.val()
             });

        });


        console.log(courses)
        return courses;
    }).then((data) => {
        console.log('Successfully retrieved courses ', data)
    }).catch((error) => {
        console.log('Error fetching courses ', error)
    })



}
