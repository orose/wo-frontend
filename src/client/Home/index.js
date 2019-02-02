import React, { Component } from 'react';
import { connect } from 'react-redux';

import ComponentHeader from '../common/ComponentHeader';
import InfoBox from '../InfoBox';
import MainHeader from '../common/MainHeader';
import PageHeader from '../common/PageHeader';
import MainNav from '../common/MainNav';

import './Home.scss';

import { fetchCustomers, updatePageTitle } from '../actions';

class Customer extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCustomers());
    dispatch(updatePageTitle('Workorder system'));
  }

  render() {
    return (
      <div>
        <MainHeader />
        <MainNav />
        <PageHeader />
        <section className="content">
          <section className="page-container-home">
            <InfoBox
              title="Fin tittel"
              text="Dette er litt tekst. Dette er litt tekst."
            />
            <InfoBox
              title="Fin tittel"
              text="Dette er litt tekst. Dette er litt tekst."
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
