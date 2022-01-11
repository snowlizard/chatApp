import React from 'react';
import Button from '@mui/material/Button';
import { myApp } from '../services/firebase';
import { signInWithPopup, signInAnonymously, GoogleAuthProvider, getAuth, } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const Login = () => {
    const audio = new Audio('./assets/shootinStar.mp3');
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
    console.log(origin)

    return (
        <div id="loginWrapper">
            <h1 className="title">Meme Space</h1>
            <form id="loginBox">
                <div className="-loginBox">
                    <Button variant="contained" onClick={login}>
                        Google
                    </Button>
                </div>
                <div className="-loginBox">
                    <Button variant="contained" onClick={AnonLogin}>
                        Annon Login
                    </Button>
                </div>
            </form>
            <img id="pepe" src={'./assets/pepeAudio.gif'} alt="playAudio" onClick={playMeme}></img>
        </div>
    );
}