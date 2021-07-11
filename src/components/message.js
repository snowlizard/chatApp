import React from 'react';

export class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        };
    }

    handleInput = (e) => {
        console.log('he')
    }

    render = () => {
        return(
            <div id="msgContainer">
                <div id="backgroundContainer">
                    <div id="messageArea"></div>
                    <div id="inputContainer">
                        <div id="textInput">
                            <textarea id="textArea"/>
                        </div>
                        <span id="separator"></span>
                        <div id="buttonArea">
                            <button id="sendBtn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    
}

