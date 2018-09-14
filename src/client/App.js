import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import MainHeader from './common/MainHeader';
import PageHeader from './common/PageHeader';
import MainNav from './common/MainNav';
import Customer from './Customer';
import Workorder from './Workorder';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <MainHeader />
          <MainNav />
          <PageHeader />
          <section className="content">
            <Route path="/customer" component={Customer} />
            <Route path="/workorder" component={Workorder} />
          </section>
        </div>
      </Router>
    );
  }
}
