import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        jwtToken: action.data.token
      });
    case LOGIN_FAILURE:
      return [
        ...state,
        {
          id: action.id,
          customer_id: action.workorder.customer_id,
          title: action.workorder.title,
          description: action.workorder.description
        }
      ];
    default:
      return state;
  }
};

export default user;
