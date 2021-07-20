import firebase from "firebase/app";
import 'firebase/firestore';

export const sendMsg = (msg, uid, photoURL) => {
    const collect  = firebase.firestore().collection('messages')
    collect.add({
        uid,
        photoURL,
        msg,
        sentAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

}
