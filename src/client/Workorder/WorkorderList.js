import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchWorkorders } from '../actions';

class WorkorderList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWorkorders());
  }

  render() {
    const { workorders, isFetching } = this.props;
    let workorderList = [];

    if (!isFetching && workorders) {
      workorderList = workorders.map(w => (
        <li key={w.id}>
          <strong>{w.title}</strong>
          <br />
          {w.description}
        </li>
      ));
      return <ul>{workorderList}</ul>;
    }

    if (isFetching) {
      return <p>Loading...</p>;
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    workorders: state.workorders.items,
    isFetching: state.workorders.isFetching,
  };
}

export default connect(mapStateToProps)(WorkorderList);
