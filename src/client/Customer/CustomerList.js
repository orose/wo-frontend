import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchCustomers } from '../actions';

class CustomerList extends Component {
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

CustomerList.propTypes = {
  isFetching: PropTypes.bool,
  customers: PropTypes.array,
};

export default CustomerList;
