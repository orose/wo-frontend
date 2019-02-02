import React, { Component } from 'react';
import fakeAuthCentralState from '../common/fakeAuthCentralState';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
    };
  }

  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }

    return (
      <div>
        <LoginForm login={this.login} />
      </div>
    );
  }
}

export default Login;
