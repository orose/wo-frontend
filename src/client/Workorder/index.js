import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkorderList from './WorkorderList';

class Workorder extends Component {
  render() {
    return (
      <section>
        <h1>Workorder</h1>
        <WorkorderList workorders={this.props.workorders} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { workorders, customers } = state;

  return {
    customers,
    workorders,
  };
}

export default connect(mapStateToProps)(Workorder);
