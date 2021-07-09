import React from 'react';

export const Message = () => {
    return (
        <div id="msgContainer">
            <div id="backgroundContainer">
                <div id="messageArea"></div>
                <div className="messageInput">
                    <textarea id="inputArea" cols="20" rows="1"></textarea>
                    <button id="sendMsg">Send</button>
                </div>
            </div>
        </div>
    );
}