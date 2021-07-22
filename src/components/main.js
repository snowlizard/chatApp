import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { sendMsg, database } from '../firebase/mixins';
import { Msg } from './msg';
import { useHistory } from 'react-router';

export const Message = () => {
    const auth = firebase.auth();
    const hist = useHistory();
    
    let [chatLog, setChatLog] = useState([]);

    useEffect ( () => {
        const logRef   = database.ref('messages');
        let   logs     = [];
        const listener = logRef.on('value', snapshot => {
            logs = Object.values(snapshot.val());
            setChatLog(logs);
        });
        return () => logRef.off('value', listener);
    }, [database]);

    const handleInput = (e) => {
        const {uid, photoURL} = auth.currentUser;
        let val = document.getElementById('textArea');
        sendMsg(val.value, uid, photoURL)
        val.value = '';
    }

    const signout = () => {
        firebase.auth().signOut();
        hist.push('/');
    }
    return(
        <div id="msgContainer">
            <div id="signOut" onClick={signout}>
                <p>sign out</p>
            </div>
            <span className="separator"/>
            <div id="backgroundContainer">
                <div id="messageArea">
                    {
                        chatLog && chatLog.map( log => {return <Msg key={log.sentAt} text={log.msg} photoURL={log.photoURL} />})
                    }
                </div>
                <div id="inputContainer">
                    <div id="textInput">
                        <textarea id="textArea"/>
                    </div>
                    <span id="separator"></span>
                    <div id="buttonArea">
                        <button id="sendBtn" onClick={handleInput}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
