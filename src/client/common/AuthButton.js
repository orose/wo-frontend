import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuthCentralState from './fakeAuthCentralState';

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuthCentralState.isAuthenticated ? (
      <p>
        Welcome to this amazing content!{' '}
        <button
          onClick={() => {
            fakeAuthCentralState.signout(() => history.push('/'));
          }}>
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    ),
);

export default AuthButton;
