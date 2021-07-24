import firebase from "firebase/app";
import 'firebase/firestore';
import moment from "moment";

export const database = firebase.database();

export const sendMsg = (msg, uid, photoURL, displayName) => {
    const collect  = database.ref('messages')
    collect.push({
        displayName,
        uid,
        photoURL,
        msg,
        sentAt: moment().format('LT  L')
    })

}