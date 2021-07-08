import React from 'react';

export const Login = () => {
    return (
        <div id="loginWrapper">
            <form id="loginBox">
                <label id="loginLabel">Select a user name: </label> 
                <input type="text" id="userNameInput" size="20" required></input>
               <input type="submit" id="loginBtn" value="Enter"></input>
            </form>
        </div>
    );
}