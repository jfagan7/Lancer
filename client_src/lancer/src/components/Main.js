import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import JobItem from './JobItem';
import Job from './Job'

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/job-postings' component = {Job}/>
            <Route exact path='/job-postings/:id' component = {JobItem}/>
        </Switch>
    </main>
)

export default Main;