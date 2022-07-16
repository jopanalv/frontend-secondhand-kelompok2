import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";
import LoginReducer from "./Login";
import AddProductReducer from "./AddProduct";
import EditProductReducer from "./EditProduct";
import ProductReducer from "./Product";
import daftarjualReducer from "./DaftarJual"

export default combineReducers({
  profile: ProfileReducer,
  register: RegisterReducer,
  login: LoginReducer,
  addProduct: AddProductReducer,
  editProduct: EditProductReducer,
  deleteProduct: EditProductReducer,
  product: ProductReducer,
  daftarjualReducer,
});
