import React from 'react';

export const Message = () => {

    const msg = () => {
        const container = document.getElementById('msgInput');
        container.hidden = false;
    }

    const cancel = () => {
        const container = document.getElementById('msgInput');
        container.hidden = true;
    }

    return (
        <div id="msgContainer">
            <div id="backgroundContainer">
                <div id="messageArea"></div>
            </div>
            <div className="messageInput" id="msgInput" hidden={true}>
                    <div className="innerDiv">
                        <textarea id="inputArea"></textarea>
                    </div>
                    <div className="innerDiv">
                        <button id="sendMsg">Send</button>
                        <button onClick={cancel} id="cancelSend">Cancel</button>
                    </div>
                </div>
            <div id="sideBar">
                <div className="sideBtn">
                    <button onClick={msg}>Msg</button>
                </div>
            </div>
        </div>
    );
}