import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { sendMsg } from '../services/mixins';
import Button from '@mui/material/Button';
import { TextField, List, ListItemButton } from '@mui/material';
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
            <List id="signOut">
                <ListItemButton onClick={signout}
                    component='nav'>
                    Sign Out
                </ListItemButton>
            </List>
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
                        <TextField id="textArea"
                            fullWidth
                            label='send chat message'
                            variant="outlined"
                            onKeyDown={testForEnter}/>
                    </div>
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
