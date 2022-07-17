import { combineReducers } from "redux";
import RegisterReducer from "./Register";
import ProfileReducer from "./Profile";
import LoginReducer from "./Login";
import AddProductReducer from "./AddProduct";
<<<<<<< HEAD
import EditProductReducer from "./EditProduct";
import ProductReducer from "./Product";
import daftarjualReducer from "./DaftarJual"
=======
import ProductReducer from "./Product"
>>>>>>> 37edfdf457e7a4be35db92414b63ec9dea03f250

export default combineReducers({
  profile: ProfileReducer,
  register: RegisterReducer,
  login: LoginReducer,
  addProduct: AddProductReducer,
<<<<<<< HEAD
  editProduct: EditProductReducer,
  deleteProduct: EditProductReducer,
  product: ProductReducer,
  daftarjualReducer,
=======
  product: ProductReducer
>>>>>>> 37edfdf457e7a4be35db92414b63ec9dea03f250
});
