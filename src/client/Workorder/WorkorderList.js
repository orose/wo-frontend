import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkorderList extends Component {
  render() {
    const { workorders, isFetching } = this.props;
    let workorderList = [];

    if (!isFetching && workorders) {
      workorderList = workorders.map((w, index) => (
        <li key={index}>
          <strong>{w.title}</strong>
          <br />
          {w.description}
        </li>
      ));
      return <ul>{workorderList}</ul>;
    }

    if (isFetching) {
      return <p>Loading...</p>;
    }

    return null;
  }
}

WorkorderList.propTypes = {
  isFetching: PropTypes.bool,
  workorders: PropTypes.array,
};

export default WorkorderList;
