import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";
import LoginReducer from "./Login";
import AddProductReducer from "./AddProduct";

export default combineReducers({
  ProfileReducer,
  RegisterReducer,
  LoginReducer,
  AddProductReducer,
});
