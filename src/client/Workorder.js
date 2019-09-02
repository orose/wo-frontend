import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import { fetchWorkorders } from "./actions";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class Workorder extends Component {
  render() {
    const items = [];
    if (this.props.workorderList !== undefined) {
      this.props.workorderList.data.map((value, index) => {
        items.push(<li key={index}>{value.title}</li>);
      });
    }
    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          Workorder
        </Typography>
        <ul>{items}</ul>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.fetchWorkorders();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isFetching: state.user.isFetching,
    workorderList: state.workorders.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWorkorders: () => dispatch(fetchWorkorders())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Workorder));
