import React, { Component } from "react";
import "typeface-roboto";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import ProtectedRoute from "./common/ProtectedRoute";

import About from "./About";
import Login from "./Login";
import MainHeader from "./MainHeader";
import Workorder from "./Workorder";
import WorkorderList from "./WorkorderList";
import UserProfile from "./UserProfile";

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <MainHeader />
          <Container maxWidth="lg">
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/about" component={withRouter(About)} />
            <ProtectedRoute exact path="/workorder" component={withRouter(WorkorderList)} />
            <ProtectedRoute path="/workorder/:id" component={withRouter(Workorder)} />
            <ProtectedRoute path="/profile" component={withRouter(UserProfile)} />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}
