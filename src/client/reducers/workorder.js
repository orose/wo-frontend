const workorders = (
  state = [
    {
      id: 0,
      customer_id: 0,
      title: 'First workorder',
      description: 'The description of the first workorder',
    },
    {
      id: 1,
      customer_id: 1,
      title: 'Second workorder',
      description: 'The description of the second workorder',
    },
  ],
  action,
) => {
  switch (action.type) {
    case 'ADD_WORKORDER':
      return [
        ...state,
        {
          id: action.id,
          customer_id: action.workorder.customer_id,
          title: action.workorder.title,
          description: action.workorder.description,
        },
      ];
    default:
      return state;
  }
};

export default workorders;
