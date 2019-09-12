import {
  WORKORDERS_REQUEST,
  WORKORDERS_SUCCESS,
  WORKORDERS_FAILURE,
  SINGLE_WORKORDER_REQUEST,
  SINGLE_WORKORDER_SUCCESS,
  SINGLE_WORKORDER_FAILURE
} from "../actions";

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
    case SINGLE_WORKORDER_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case SINGLE_WORKORDER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        current: action.data
      });
    case SINGLE_WORKORDER_FAILURE:
      return [
        ...state,
        {
          current: null
        }
      ];
    default:
      return state;
  }
};

export default workorders;
