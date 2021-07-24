import React from 'react';import '../../public/misc/shootinStar.mp3';
import myApp from '../services/firebase';
import firebase from 'firebase';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

const origin = window.location.origin;

export const Login = () => {
    const audio = new Audio(origin + '/misc/shootinStar.mp3');
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

    const login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithPopup(provider);
    }

    const AnonLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInAnonymously();
    }
    return (
        <div id="loginWrapper">
            <h1 className="title">Meme Space</h1>
            <form id="loginBox">
                <div className="-loginBox">
                    <input type="submit" value="Google Login" onClick={login}></input>
                </div>
                <div className="-loginBox">
                    <input type="submit" value="Anon Login" onClick={AnonLogin}></input>
                </div>
            </form>
            <img id="pepe" src={origin + '/images/pepeAudio.gif'} alt="playAudio" onClick={playMeme}></img>
        </div>
    );
}