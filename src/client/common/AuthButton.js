import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuthCentralState from './fakeAuthCentralState';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuthCentralState.isAuthenticated ? (
      <button
        onClick={() => {
          fakeAuthCentralState.signout(() => history.push('/'));
        }}>
        Sign out
      </button>
    ) : (
      <p>You are not logged in.</p>
    ),
);

export default AuthButton;
