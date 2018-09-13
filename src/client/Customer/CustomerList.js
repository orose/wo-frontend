import React, { Component } from 'react';

class CustomerList extends Component {
  render() {
    const { customers } = this.props;
    const customerList = customers.map((c) =>
      <li key={c.id}>
        {c.name}
      </li>
    );

    return (
      <ul>
        {customerList}
      </ul>
    );
  }
}

export default CustomerList;
