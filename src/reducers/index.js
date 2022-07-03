import { combineReducers } from "redux";
import activityDataReducer from "./activityDataReducer";
import otherDataReducer from "./otherDataReducer";

const rootReducer = combineReducers({
  activity: activityDataReducer,
  other: otherDataReducer,
});
export default rootReducer;
