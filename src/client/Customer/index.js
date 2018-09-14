import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerList from './CustomerList';
import ComponentHeader from '../common/ComponentHeader';

import { fetchCustomers } from '../actions';

class Customer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
  }

  render() {
    return (
      <section>
        <ComponentHeader text="Customer" />
        <CustomerList
          customers={this.props.customers}
          isFetching={this.props.isFetching}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.items,
    isFetching: state.customers.isFetching,
  };
}

export default connect(mapStateToProps)(Customer);
