import { combineReducers } from "redux";

import workorders from "./workorder";
import global from "./global";

export default combineReducers({
  global,
  workorders
});
