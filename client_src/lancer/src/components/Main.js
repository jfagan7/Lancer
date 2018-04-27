import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import Job from '../views/Jobs';

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/jobs' component = {Job}/>
        </Switch>
    </main>
)

export default Main;