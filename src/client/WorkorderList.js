import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link as RouterLink } from "react-router-dom";

import { fetchWorkorders } from "./actions";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class WorkorderList extends Component {
  render() {
    const rows = [];
    if (this.props.workorderList !== undefined) {
      this.props.workorderList.data.map((value, index) => {
        //items.push(<li key={index}>{value.title}</li>);
        rows.push(
          <TableRow key={index}>
            <TableCell>{value.id}</TableCell>
            <TableCell>
              <Link component={RouterLink} color="textPrimary" to={"/workorder/" + value.id}>
                {value.title}
              </Link>
            </TableCell>
            <TableCell>{value.description}</TableCell>
          </TableRow>
        );
      });
    }
    return (
      <Fragment>
        <Typography variant="h3" component="h2" align="center">
          Workorder
        </Typography>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </Paper>
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
)(withStyles(styles)(WorkorderList));
