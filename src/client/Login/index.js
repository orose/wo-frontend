import React, { Component } from "react";
import { connect } from "react-redux";
import fakeAuthCentralState from "../common/fakeAuthCentralState";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import { login } from "../actions";

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

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      redirectToReferrer: false,
      tempEmail: "",
      tempPassword: ""
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleLogin = () => {
    this.props.onLogin(this.state.tempEmail, this.state.tempPassword);
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    const { classes } = this.props;

    /*
    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname);
    }
    */

    return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="tempEmail"
              autoComplete="email"
              autoFocus
              type="email"
              value={this.state.tempEmail}
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="tempPassword"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.tempPassword}
              onChange={this.handleInputChange}
            />
            <Button
              onClick={this.handleLogin}
              disabled={this.props.isFetching}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.user.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (username, password) => dispatch(login(username, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
