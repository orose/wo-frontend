import { CUSTOMERS_RECEIVE, CUSTOMERS_REQUEST } from '../actions';

const customers = (state = [], action) => {
  switch (action.type) {
    case CUSTOMERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CUSTOMERS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.customers,
        lastUpdated: action.receivedAt,
      });
    case 'ADD_CUSTOMER':
      return [
        ...state,
        {
          id: action.id,
          name: action.customer.name,
          visit_street: action.customer.visit_street,
          visit_zip: action.customer.visit_zip,
          visit_city: action.customer.visit_city,
          billing_street: action.customer.billing_street,
          billing_zip: action.customer.billing_zip,
          billing_city: action.customer.billing_city,
        },
      ];
    default:
      return state;
  }
};

export default customers;
