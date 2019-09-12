import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { fetchSingleWorkorder } from "./actions";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class Workorder extends Component {
  render() {
    if (this.props.workorder === undefined) return null;

    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          Workorder details
        </Typography>
        <Paper>
          <p>The id is: {this.props.workorder.id}</p>
          <p>The title is: {this.props.workorder.title}</p>
        </Paper>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.fetchWorkorder(this.props.match.params.id);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.workorders.isFetching,
    workorder: state.workorders.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWorkorder: id => dispatch(fetchSingleWorkorder(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Workorder));
