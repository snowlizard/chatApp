import React from 'react';
import { getDatabase, ref, update, push, set } from 'firebase/database';
import moment from "moment";

const database = getDatabase();

// appends a new message to the database
export const sendMsg = (msg, uid, photoURL, displayName) => {
    const newPostRef = ref(database, 'messages');
    const postData =  {
        displayName,
        uid,
        photoURL,
        msg,
        sentAt: moment().format('LT  L')
    };

    push(newPostRef, postData);

}
