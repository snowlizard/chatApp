import React from 'react';

export const Msg = (props) => {
    return(
        <div id="cont">
            <img id="usrPhoto" src={props.photoURL}></img>
            <div id="msgText">
                <p id="userName">{props.displayName}</p>
                <p id="timeStamp">{props.sentAt}</p>
                <p id="msgText">{props.text}</p>
            </div>
        </div>
    );
}