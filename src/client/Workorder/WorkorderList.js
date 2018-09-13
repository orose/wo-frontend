import React, { Component } from 'react';

class WorkorderList extends Component {
  render() {
    const { workorders } = this.props;
    const workorderList = workorders.map(w => (
      <li key={w.id}>
        <strong>{w.title}</strong>
        <br />
        {w.description}
      </li>
    ));

    return <ul>{workorderList}</ul>;
  }
}

export default WorkorderList;
