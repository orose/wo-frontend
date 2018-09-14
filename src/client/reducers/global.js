import { UPDATE_PAGE_TITLE } from '../actions';

const global = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PAGE_TITLE:
      return Object.assign({}, state, {
        pageTitle: action.title,
      });
    default:
      return state;
  }
};

export default global;
