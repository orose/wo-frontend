import React, { Component } from "react";
import fakeAuthCentralState from "../common/fakeAuthCentralState";

import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import LoginForm from "./LoginForm";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  },
  paper: {
    marginTop: "6em",
    marginBottom: "6em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: "1em",
    backgroundColor: "#ff0000"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "1em"
  },
  submit: {
    margin: "3em 0 2em"
  }
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false
    };
  }

  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    const { classes } = this.props;

    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <LoginForm login={this.login} />
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
