import React from 'react';
import firebase from 'firebase/app';

export const Message = () => {
    const auth = firebase.auth();
    const database = firebase.database();
    const msgDB= firebase.collection('messeges');
    
    const handleInput = (e) => {
        const {uid, photoURL} = auth.currentUser;
        let val = document.getElementById('textArea');

        database.ref('/users' + uid).set({
            message: val.value
        });

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
