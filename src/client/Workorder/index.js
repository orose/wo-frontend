import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkorderList from './WorkorderList';
import ComponentHeader from '../common/ComponentHeader';
import MainHeader from '../common/MainHeader';
import PageHeader from '../common/PageHeader';
import MainNav from '../common/MainNav';

import { fetchWorkorders, updatePageTitle } from '../actions';

class Workorder extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWorkorders());
    dispatch(updatePageTitle('Workorder page'));
  }

  render() {
    return (
      <div>
        <MainHeader />
        <MainNav />
        <PageHeader />
        <section className="content">
          <section>
            <ComponentHeader text="All workorders" />
            <WorkorderList
              workorders={this.props.workorders}
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
    workorders: state.workorders.items,
    isFetching: state.workorders.isFetching,
  };
}

export default connect(mapStateToProps)(Workorder);
