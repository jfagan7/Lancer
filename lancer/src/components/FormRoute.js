import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../views/Register';
import Login from '../views/Login';
import PostJob from '../views/PostJob';

const FormRoute = ()=>(
    <main>
        <Switch>
            <Route exact path='/account/login' component = {Login} />
            <Route exact path='/account/register' component = {Register} />
            <Route exact path='/jobs/post' component = {PostJob} />
        </Switch>
    </main>
)

export default FormRoute;