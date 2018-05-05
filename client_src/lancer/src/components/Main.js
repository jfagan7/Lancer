import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import JobDetail from './JobDetail';
import Job from '../views/Job';
import About from '../views/About';
import Login from '../views/Login';

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/about' component =  {About}/>
            <Route exact path='/jobs' component = {Job}/>
            <Route exact path='/jobs/:id' component = {JobDetail}/>
            <Route exact path= '/account/login' component = {Login} />
        </Switch>
    </main>
)

export default Main;