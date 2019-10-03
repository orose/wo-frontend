import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { fetchSingleWorkorder, updateWorkorder } from "./actions";

import WorkorderForm from "./WorkorderForm";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class Workorder extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }
  render() {
    let form;
    if (this.props.workorder === undefined) return null;
    if (!this.props.isFetching) {
      form = (
        <WorkorderForm
          workorder={this.props.workorder}
          isFetching={this.props.isFetching}
          handleSave={this.handleSave}
        />
      );
    }

    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          Workorder details
        </Typography>
        <Paper>
          <p>The id is: {this.props.workorder.id}</p>
          <p>The title is: {this.props.workorder.title}</p>
          {form}
        </Paper>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.fetchWorkorder(this.props.match.params.id);
  }

  handleSave(workorder) {
    console.log("Handle save from Workorder.js");
    console.log(workorder);
    console.log(this.props);
    this.props.putWorkorder(workorder);
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
    fetchWorkorder: id => dispatch(fetchSingleWorkorder(id)),
    putWorkorder: workorder => dispatch(updateWorkorder(workorder))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Workorder));
