import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerList from './CustomerList';
import ComponentHeader from '../common/ComponentHeader';

import { fetchCustomers, updatePageTitle } from '../actions';

class Customer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
    dispatch(updatePageTitle('Customer page'));
  }

  render() {
    return (
      <section>
        <ComponentHeader text="All customers" />
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
