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
import AuthButton from './common/AuthButton';
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
          <AuthButton />
          <ProtectedRoute path="/protected" component={Protected} />
          <Link to="/protected">Protected Content</Link>
          <Route path="/login" component={withRouter(Login)} />
          <MainHeader />
          <MainNav />
          <PageHeader />
          <section className="content">
            <Route path="/" exact component={Home} />
            <Route path="/customer" component={Customer} />
            <Route path="/workorder" component={Workorder} />
          </section>
        </div>
      </Router>
    );
  }
}
