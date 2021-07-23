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
        sentAt: moment().format('hh:mm  MM/DD/YY')
    })

}