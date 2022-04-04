import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { myApp } from '../services/firebase';
import { Link } from 'react-router-dom';
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
            <div>
                <h1 className="title">Meme Space</h1>
            </div>
            <div id="loginBox">
                <form id='sign-in'>
                    <TextField
                    className='text-input'
                    label="username"
                    type="text"
                    />

                    <TextField
                    className='text-input'
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                    
                    <Link to='/signup'>
                        <Button variant='contained'>
                            sign up
                        </Button>
                    </Link>

                    <Button variant='contained'>
                        LOG IN
                    </Button>
                </form>

                <div className="other-logins">
                    <Button variant="contained">
                        reset pass
                    </Button>
    
                    <Button variant="contained" onClick={login}>
                        Google
                    </Button>

                    <Button variant="contained" onClick={AnonLogin}>
                        Annon Login
                    </Button>
                </div>
                
            </div>
            <img id="pepe" src={'./assets/pepeAudio.gif'} alt="playAudio" onClick={playMeme}></img>
        </div>
    );
}