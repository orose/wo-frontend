import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerList from './CustomerList';

class Customer extends Component {
  render() {
    return (
      <section>
        <h1>Customer</h1>
        <CustomerList customers={this.props.customers} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { customers } = state;

  return {
    customers,
  };
}

export default connect(mapStateToProps)(Customer);
