import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducer;
