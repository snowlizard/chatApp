import React from 'react';import '../../public/misc/shootinStar.mp3';
import { useHistory } from 'react-router';
import firebase from '../firebase/firebase';
import 'firebase/auth';



let auth = firebase.auth();
//auth.useEmulator('http://localhost:8080');

const origin = window.location.origin;

export const Login = () => {
    const audio = new Audio(origin + '/misc/shootinStar.mp3');
    const history = useHistory();
    let isPlaying = false;

    const playMeme = () => { 
        if(!isPlaying){
            audio.play();
            audio.loop = 'loop';
            isPlaying = true;
        }else{
            audio.pause();
            isPlaying = false;
        }
    }

    const login = () => {
        auth.signInAnonymously().then( () => {
            history.push('/main');
        }).catch( (error) => {
            console.log(error)
        })
    }

    return (
        <div id="loginWrapper">
            <h1 className="title">Meme Space</h1>
            <form id="loginBox">
                <div className="-loginBox">
                    <label id="loginLabel">Select a user name: </label> 
                    <input type="text" id="userNameInput" size="12" required></input>
                </div>
                <div className="-loginBox">
                    <input type="submit" id="loginBtn" value="Enter" onClick={login}></input>
                </div>
            </form>
            <img id="pepe" src={origin + '/images/pepeAudio.gif'} alt="playAudio" onClick={playMeme}></img>
        </div>
    );
}