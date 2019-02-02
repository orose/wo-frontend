import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AuthButton from './AuthButton';

import './MainNav.scss';

class MainNav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" exact>
              Workorder system
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer">Customer</NavLink>
          </li>
          <li>
            <NavLink to="/workorder">Workorder</NavLink>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
