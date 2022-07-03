import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";

export default combineReducers({
  ProfileReducer,
  RegisterReducer,
});
