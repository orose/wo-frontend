import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCustomers } from '../actions';

class CustomerList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
  }
  render() {
    const { customers, isFetching } = this.props;
    let customerList = [];

    if (!isFetching && customers) {
      customerList = customers.map(w => (
        <li key={w.id}>
          <strong>{w.name}</strong>
          <br />
        </li>
      ));
      return <ul>{customerList}</ul>;
    }

    if (isFetching) {
      return <p>Loading...</p>;
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers.items,
    isFetching: state.customers.isFetching,
  };
}

export default connect(mapStateToProps)(CustomerList);
