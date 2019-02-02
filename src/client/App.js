import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import './App.scss';

import MainHeader from './common/MainHeader';
import PageHeader from './common/PageHeader';
import MainNav from './common/MainNav';
import ProtectedRoute from './common/ProtectedRoute';
import Home from './Home';
import Customer from './Customer';
import Workorder from './Workorder';
import Login from './Login';

const Public = () => <h3>Public Content</h3>;
const Protected = () => <h3>Protected Content</h3>;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route path="/login" component={withRouter(Login)} />
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/customer" component={Customer} />
          <ProtectedRoute path="/workorder" component={Workorder} />
        </div>
      </Router>
    );
  }
}
