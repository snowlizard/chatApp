import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './components/landing';
import { Signup } from './components/signup';
import './styles/styles.css';
import 'normalize.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Landing /> } />
                <Route path="signup" element={ <Signup /> } />
            </Routes>
        </BrowserRouter>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));