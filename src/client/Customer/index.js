import React, { Component } from 'react';

class Customer extends Component {
  state = { customers: null };

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => this.setState({ customers: data }));
  }

  render() {
    const { customers } = this.state;
    let customerList = {};
    if (customers) {
      customerList = customers.map(c => (
        <li key={c.id}>
          <strong>{c.name}</strong>
        </li>
      ));
    }
    return (
      <section>
        <h1>Customer</h1>
        {customers ? <ul>{customerList}</ul> : <p>Loading.. please wait!</p>}
      </section>
    );
  }
}

export default Customer;
