import { WORKORDERS_REQUEST, WORKORDERS_SUCCESS, WORKORDERS_FAILURE } from "../actions";

const workorders = (state = [], action) => {
  switch (action.type) {
    case WORKORDERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case WORKORDERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        list: action.data
      });
    case WORKORDERS_FAILURE:
      return [
        ...state,
        {
          workorders: []
        }
      ];
    default:
      return state;
  }
};

export default workorders;
