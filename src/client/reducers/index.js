import { combineReducers } from "redux";

import user from "./user";
import workorders from "./workorder";

export default combineReducers({
  user,
  workorders
});
