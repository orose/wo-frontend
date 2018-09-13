let nextWorkorderId = 0;
export const addWorkorder = workorder => ({
  type: 'ADD_WORKORDER',
  id: nextWorkorderId++,
  workorder,
});

let nextCustomerId = 0;
export const addCustomer = customer => ({
  type: 'ADD_CUSTOMER',
  id: nextCustomerId++,
  customer,
});
