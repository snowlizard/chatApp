import React, { useEffect, useState } from 'react';
import { sendMsg } from '../services/mixins';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { TextField, ThemeProvider , createTheme } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { ref, onValue, getDatabase } from 'firebase/database';
import { Msg } from './msg';
import { Navbar } from './navbar';

export const Main = () => {
    const auth = getAuth();
    const database = getDatabase();
    
    let [chatLog, setChatLog] = useState([]);

    // theme for textfield
    const theme = createTheme({
        shape: {
            borderRadius: 25
        }
    })

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

    return(
        <div id="msgContainer">
            <Navbar />
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
                    <ThemeProvider theme={theme}>
                        <TextField
                            id='textArea'
                            fullWidth
                            placeholder='send message'
                            variant="outlined"
                            onKeyDown={testForEnter}/>
                    </ThemeProvider>

                    <div>
                        <IconButton id="sendBtn"
                            onClick={handleInput}>
                            < SendIcon />
                        </IconButton>
                    </div>
                </div>

            </div>

        </div>
    );
    
}
