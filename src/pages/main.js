import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { sendMsg } from '../services/mixins';
import Button from '@mui/material/Button';
import { ref, onValue, getDatabase } from 'firebase/database';
import { Msg } from './msg';

export const Message = () => {
    const auth = getAuth();
    const database = getDatabase();
    
    let [chatLog, setChatLog] = useState([]);

    // gets database object and copies all values to logs:array
    // updates screen everytime database gets updated
    useEffect ( () => {
        const logRef   = ref(database, 'messages');
        let   logs     = [];
        onValue(logRef, (snapshot) => {
            snapshot.val() !== null ? logs = (Object.values(snapshot.val())) : logs = [];
            setChatLog(logs);
        });

    }, [database]);

    // send message object to firebase database
    const handleInput = (e) => {
        const {uid, photoURL, displayName} = auth.currentUser;
        let val = document.getElementById('textArea');
        !displayName ? 
            sendMsg(val.value, uid, 'https://picsum.photos/200', 'Anon' + uid.substring(0,4)):
            sendMsg(val.value, uid, photoURL, displayName);
        val.value = '';
    }

    // if enter key is pushed send message
    const testForEnter = (e) => {
        const key = e.code;
        if(key === 'Enter'){
            handleInput();
            document.getElementById('textArea').value = '';
        }
    }

    const signout = () => {
        auth.signOut();
    }

    return(
        <div id="msgContainer">
            <div id="signOut" onClick={signout}>
                <p>Sign out</p>
            </div>
            <span className="separator"/>
            <div id="backgroundContainer">
                <div id="messageArea">
                    {
                        chatLog && chatLog.map( log => 
                            {return <Msg key={log.sentAt + log.msg[1]} 
                                        uid={log.uid}
                                        currentUser={auth.currentUser.uid}
                                        displayName={log.displayName}
                                        sentAt={log.sentAt}
                                        text={log.msg} 
                                        photoURL={log.photoURL} />})
                    }
                </div>
                <div id="inputContainer">
                    <div id="textInput">
                        <textarea id="textArea" onKeyDown={testForEnter}/>
                    </div>
                    <span id="separator"></span>
                    <div id="buttonArea">
                        <Button id="sendBtn"
                            variant='contained'
                            onClick={handleInput}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
