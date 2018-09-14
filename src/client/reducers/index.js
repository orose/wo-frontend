import { combineReducers } from 'redux';

import customers from './customer';
import workorders from './workorder';
import global from './global';

export default combineReducers({
  customers,
  global,
  workorders,
});
