import { WORKORDERS_RECEIVE, WORKORDERS_REQUEST } from '../actions';

const workorders = (state = [], action) => {
  switch (action.type) {
    case WORKORDERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case WORKORDERS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.workorders,
        lastUpdated: action.receivedAt,
      });
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
