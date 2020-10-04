import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Subscribe from './Subscribe';
import { LOCAL_STORAGE_SUBSCRIPTION_KEY } from './constants';

const Routes = () => {
    const initMsg = localStorage? localStorage.getItem(LOCAL_STORAGE_SUBSCRIPTION_KEY) : 'Welcome!';
    const [msg, setMsg] = useState(initMsg);
    
    return (<Switch>
        <Route exact path="/" component={() => <Home msg={msg}/>}/>
        <Route path="/subscribe" component={() => <Subscribe onSubmit={setMsg} msg={msg}/>}/>
    </Switch>);}

export default Routes; 