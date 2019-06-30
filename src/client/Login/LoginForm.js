import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "1em"
  },
  submit: {
    margin: "3em 0 2em"
  }
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
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

  render() {
    const { classes } = this.props;
    return (
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
        <Button onClick={this.props.login} fullWidth variant="contained" color="primary" className={classes.submit}>
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
    );
  }
}
export default withStyles(styles)(LoginForm);
