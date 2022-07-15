import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";
import LoginReducer from "./Login";
import AddProductReducer from "./AddProduct";
import ProductReducer from "./Product"

export default combineReducers({
  profile: ProfileReducer,
  register: RegisterReducer,
  login: LoginReducer,
  addProduct: AddProductReducer,
  product: ProductReducer
});
