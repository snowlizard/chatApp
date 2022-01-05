import React from 'react';
import { Landing } from '../pages/landing';
import { E404 } from '../pages/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} exact={true} />
                <Route element={< E404 />} />
            </Routes>
        </BrowserRouter>
    );
}