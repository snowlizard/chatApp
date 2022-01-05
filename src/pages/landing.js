import React from 'react';
import { Login } from './login';
import { Message } from './main';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const Landing = () => {
    const auth = getAuth();
    const [loginState, setLogin] = useState([]);

    // changes login state depending if user is logged in or not
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