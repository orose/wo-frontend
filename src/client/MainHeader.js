import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = {
  appBar: {
    borderBottom: `1px solid black`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: "1em 1.5em"
  }
};

class MainHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default" elevation={2} className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Workplanner
          </Typography>
          <nav>
            <Link component={RouterLink} variant="button" color="textPrimary" to="/workorder" className={classes.link}>
              Workorder
            </Link>
            <Link component={RouterLink} variant="button" color="textPrimary" to="/about" className={classes.link}>
              About
            </Link>
            <Link component={RouterLink} variant="button" color="textPrimary" to="/profile" className={classes.link}>
              Profile
            </Link>
          </nav>
          <Button component={RouterLink} to="/login" color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(MainHeader);
