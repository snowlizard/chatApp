import React from 'react';
import { Login } from './login';
import { Message } from './main';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const Landing = () => {
    const auth = getAuth();
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