import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { fetchUserinfo } from "./actions";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class UserProfile extends Component {
  displayName() {
    if (this.props.userinfo !== undefined) {
      return (
        <Fragment>
          <p>
            <strong>Name:</strong> {this.props.userinfo.firstname + " " + this.props.userinfo.lastname}
          </p>
          <p>
            <strong>E-mail:</strong> {this.props.userinfo.email}
          </p>
        </Fragment>
      );
    }
  }
  render() {
    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          User profile
        </Typography>
        <Fragment>{this.displayName()}</Fragment>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.fetchUserinfo();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.user.isFetching,
    userinfo: state.user.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserinfo: () => dispatch(fetchUserinfo())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserProfile));
