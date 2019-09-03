import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USERINFO_REQUEST,
  USERINFO_SUCCESS,
  USERINFO_FAILURE
} from "../actions";

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });
    case LOGIN_SUCCESS:
      sessionStorage.setItem("jwtToken", action.data.token);
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
    case USERINFO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case USERINFO_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });
    case USERINFO_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: null
      });
    default:
      return state;
  }
};

export default user;
