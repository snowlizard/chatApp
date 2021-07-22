import React from 'react';

export const Msg = (props) => {
    return(
        <div id="cont">
            <img id="usrPhoto" src={props.photoURL}></img>
            <p id="msgText">{props.text}</p>
        </div>
    );
}