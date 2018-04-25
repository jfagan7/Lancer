import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/about' component = {About}/>

        </Switch>
    </main>
)

export default Main;