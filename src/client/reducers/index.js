import { combineReducers } from 'redux';

import customers from './customer';
import workorders from './workorder';

export default combineReducers({
  customers,
  workorders,
});
