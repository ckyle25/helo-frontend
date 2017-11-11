import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js'

export default (
    <Switch>
        <Route component={Login} path='/' exact />
        <Route component={Home} path='/home' />
    </Switch>
)
