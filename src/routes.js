import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Subscribe from './Subscribe';
import { LOCAL_STORAGE_SUBSCRIPTION_KEY } from './constants';

const Routes = () => {
    const [msg, setMsg] = useState(localStorage.getItem(LOCAL_STORAGE_SUBSCRIPTION_KEY));
    
    return (<Switch>
        <Route exact path="/" component={() => <Home msg={msg}/>}/>
        <Route path="/subscribe" component={() => <Subscribe onSubmit={setMsg} msg={msg}/>}/>
    </Switch>);}

export default Routes; 