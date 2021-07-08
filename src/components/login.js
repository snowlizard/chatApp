import React from 'react';
import '../../public/misc/shootinStar.mp3';

const origin = window.location.origin;

export const Login = () => {

    return (
        <div id="loginWrapper">
            <h1 className="title">Meme Space</h1>
            <form id="loginBox">
                <div className="-loginBox">
                    <label id="loginLabel">Select a user name: </label> 
                    <input type="text" id="userNameInput" size="12" required></input>
                </div>
                <div className="-loginBox">
                    <input type="submit" id="loginBtn" value="Enter"></input>
                </div>
            </form>
            <img src={origin + '/images/pepeAudio.gif'} alt="playAudio" onClick={ () => {
                    let audio = new Audio(origin + '/misc/shootinStar.mp3');
                    if( audio.paused && audio.ended ){
                        audio.play();
                        audio.loop = 'loop'
                    }else{
                        audio.pause()
                    }
            }}></img>
        </div>
    );
}