import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import JobDetail from './JobDetail';
import Job from '../views/Job';

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/jobs' component = {Job}/>
            <Route exact path='/jobs/:id' component = {JobDetail}/>
        </Switch>
    </main>
)

export default Main;