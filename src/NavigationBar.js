import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (<nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/subscribe" activeClassName="active">Subscribe</NavLink></li>
        </ul>
      </nav>)
}
  
export default NavigationBar;