import React from 'react';
import '../../public/misc/shootinStar.mp3';
import { myApp } from '../services/firebase';
import { signInWithPopup, signInAnonymously, GoogleAuthProvider, getAuth, } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const origin = window.location.origin;

export const Login = () => {
    const audio = new Audio(origin + '/misc/shootinStar.mp3');
    let isPlaying = false;

    // audio for when pepe is clicked on
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

    // login to page via google
    const login = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider);
    }

    // annon login
    const AnonLogin = (e) => {
        e.preventDefault();
        signInAnonymously(auth);
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