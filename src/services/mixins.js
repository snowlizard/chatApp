import { getDatabase, ref, set } from 'firebase/database'
import moment from "moment";

export const database = getDatabase();

export const sendMsg = (msg, uid, photoURL, displayName) => {
    // const collect  = database.ref('messages')
    // collect.push({
    //     displayName,
    //     uid,
    //     photoURL,
    //     msg,
    //     sentAt: moment().format('LT  L')
    // })

    set(ref(database, 'messages'), {
        displayName,
        uid,
        photoURL,
        msg,
        sentAt: moment().format('LT  L')
    })

}