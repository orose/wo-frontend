import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      tempEmail: '',
      tempPassword: '',
    };
  }

  login = () => {
    this.props.login();
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  /*
  login = () => {
    console.log('login is awesome');
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };
  */

  render() {
    return (
      <div className="login-form">
        <label>
          E-mail
          <input
            type="email"
            value={this.state.tempEmail}
            name="tempEmail"
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={this.state.tempPassword}
            name="tempPassword"
            onChange={this.handleInputChange}
          />
        </label>
        <p>
          <button onClick={this.login}>Log in</button>
        </p>
      </div>
    );
  }
}

export default connect()(LoginForm);
