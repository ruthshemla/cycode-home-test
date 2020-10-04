import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({msg}) => (
    <div className="firstpage">
        <h1>Home Page</h1>
        <p>{msg || 'Welcome!'}</p>
        {msg && <p>{'user subscribed!'}</p>}
        <button><Link to="/subscribe">Next</Link></button>
    </div>
);

export default Home;