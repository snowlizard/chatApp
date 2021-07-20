import React from 'react';
import { Login } from '../components/login';
import { Message } from '../components/main';
import { E404 } from '../components/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Login} exact={true} />
                <Route path='/main' component={Message} exact={true} />
                <Route component={E404} />
            </Switch>
        </BrowserRouter>
    );
}