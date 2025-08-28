import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  studentReducer, 
  auth: userReducer,
});
