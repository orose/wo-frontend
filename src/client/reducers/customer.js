const customers = (
  state = [
    {
      id: 0,
      name: 'Rose Webutvikling',
    },
    {
      id: 1,
      name: 'Systek AS',
    },
  ],
  action,
) => {
  switch (action.type) {
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
