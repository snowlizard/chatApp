import React from 'react';

export const Msg = (props) => {
    return(
        <div id="cont">
            <img id="usrPhoto" src={props.photoURL}></img>
            <div id="msgText">
                <p id="userName">
                    {props.displayName}
                    <br/>{props.sentAt}
                </p>
                <div id="textBubble">
                    <div>{props.text}</div>
                </div>
            </div>
        </div>
    );
}