import React from 'react';
import { Landing } from '../pages/landing';
import { E404 } from '../pages/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Landing} exact={true} />
                <Route component={E404} />
            </Switch>
        </BrowserRouter>
    );
}