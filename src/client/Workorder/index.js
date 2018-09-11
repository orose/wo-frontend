import React, { Component } from 'react';

class Workorder extends Component {
  state = { workorders: null };

  componentDidMount() {
    fetch('/api/workorders')
      .then(res => res.json())
      .then(data => this.setState({ workorders: data }));
  }

  render() {
    const { workorders } = this.state;
    let workorderList = {};
    if (workorders) {
      workorderList = workorders.map(w => (
        <li key={w.id}>
          <strong>{w.title}</strong>
        </li>
      ));
    }

    return (
      <section>
        <h1>Workorder</h1>
        {workorders ? <ul>{workorderList}</ul> : <p>Loading.. please wait!</p>}
      </section>
    );
  }
}

export default Workorder;
