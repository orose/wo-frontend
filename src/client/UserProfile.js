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
  render() {
    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          User profile
        </Typography>
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
    userinfo: state.userinfo
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
