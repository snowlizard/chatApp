import React from 'react';

export class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        };
    }

    handleInput = (e) => {
        let val = document.getElementById('textArea');
        console.log(val.value)
        val.value = '';
    }

    signout = () => {

    }

    render = () => {
        return(
            <div id="msgContainer">
                <div id="signOut" onClick={this.signout}>
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
                            <button id="sendBtn" onClick={this.handleInput}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    
}

