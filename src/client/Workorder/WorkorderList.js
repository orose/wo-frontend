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
    const { workorders } = this.props;
    let workorderList = [];

    if (workorders) {
      workorderList = workorders.map(w => (
        <li key={w.id}>
          <strong>{w.title}</strong>
          <br />
          {w.description}
        </li>
      ));
    }

    return <ul>{workorderList}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    workorders: state.workorders.items,
  };
}

export default connect(mapStateToProps)(WorkorderList);
