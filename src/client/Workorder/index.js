import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkorderList from './WorkorderList';

import { fetchWorkorders } from '../actions';

class Workorder extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWorkorders());
  }

  render() {
    return (
      <section>
        <h1>Workorder</h1>
        <WorkorderList
          workorders={this.props.workorders}
          isFetching={this.props.isFetching}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    workorders: state.workorders.items,
    isFetching: state.workorders.isFetching,
  };
}

export default connect(mapStateToProps)(Workorder);
