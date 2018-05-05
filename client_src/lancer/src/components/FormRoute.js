import React, { Component } from 'react';
import import { Switch, Route } from 'react-router-dom';
import Register from '../views/Register';
import Login from '../views/Login';

const FormRoute = ()=>(
    <main>
        <Switch>
            <Route exact path='/account/login' component = {Login} />
            <Route exact path='/account/register' component = {Register} />
        </Switch>
    </main>
)

export default FormRoute;