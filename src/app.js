import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from './components/login';
import './styles/styles.scss';
import 'normalize.css';
import firebase from 'firebase';

//let auth = firebase.auth();
//auth.useEmulator('http://localhost:8080');

ReactDOM.render(<Login/>, document.getElementById('app'));