import React from 'react';
import { Login } from './login';
import { Message } from './main';
import firebase from 'firebase/app';
import { useState, useEffect } from 'react';

export const Landing = () => {
    const auth = firebase.auth()
    const [loginState, setLogin] = useState([]);

    useEffect( () => {
        auth.onAuthStateChanged( usr => {
            setLogin(usr);
        })
    }, [auth])

    return (
        <div>
            {
                loginState ?
                <Message/> :
                <Login/>
            }
        </div>
    );
}