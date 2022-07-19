import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";
import LoginReducer from "./Login";
import AddProductReducer from "./AddProduct";
import EditProductReducer from "./EditProduct";
import ProductReducer from "./Product";
import daftarjualReducer from "./DaftarJual"
import NotifReducer from "./Notif";
import TransReducer from "./Transaction"

export default combineReducers({
  profile: ProfileReducer,
  register: RegisterReducer,
  login: LoginReducer,
  addProduct: AddProductReducer,
  product: ProductReducer,
  notif: NotifReducer,
  transaction: TransReducer,
  editProduct: EditProductReducer,
  deleteProduct: EditProductReducer,
  daftarjualReducer
});
