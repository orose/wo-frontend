import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerList from './CustomerList';
import ComponentHeader from '../common/ComponentHeader';
import MainHeader from '../common/MainHeader';
import PageHeader from '../common/PageHeader';
import MainNav from '../common/MainNav';

import { fetchCustomers, updatePageTitle } from '../actions';

class Customer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
    dispatch(updatePageTitle('Customer page'));
  }

  render() {
    return (
      <div>
        <MainHeader />
        <MainNav />
        <PageHeader />
        <section className="content">
          <section>
            <ComponentHeader text="All customers" />
            <CustomerList
              customers={this.props.customers}
              isFetching={this.props.isFetching}
            />
          </section>
        </section>
      </div>
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
