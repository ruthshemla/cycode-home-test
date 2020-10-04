import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Routes from './routes';
import Logo from './Logo';

import './App.css';

const App = () => {
    return (
      <div className="App">
        <BrowserRouter> 
          <header className="App-header">
            <Logo/>
            <NavigationBar/>
          </header>
          <div className="body-content">
            <Routes/>
          </div>
        </BrowserRouter>
      </div>
    );
  }

export default App;
