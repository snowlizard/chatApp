import React from 'react';
import firebase from 'firebase/app';
import { sendMsg } from '../firebase/mixins';

export const Message = () => {
    const auth = firebase.auth();
    
    const handleInput = (e) => {
        const {uid, photoURL} = auth.currentUser;
        let val = document.getElementById('textArea');
        sendMsg(val.value, uid, photoURL)
        val.value = '';
    }

    const signout = () => {
        firebase.auth().signOut();
    }

    return(
        <div id="msgContainer">
            <div id="signOut" onClick={signout}>
                <p>sign out</p>
            </div>
            <span className="separator"/>
            <div id="backgroundContainer">
                <div id="messageArea"></div>
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
