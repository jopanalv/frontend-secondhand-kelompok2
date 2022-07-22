import { GET_ALL_PRODUCT, GET_SELECTED_PRODUCT, GET_PRODUCT_SELLER, BUY_PRODUCT } from "../../type";

const initialState = {
  getAllProductResult: false,
  getAllProductLoading: false,
  getAllProductError: false,
  getSelectedProductResult: null,
  getSelectedProductLoading: false,
  getSelectedProductError: false,
  getProductSellerResult: false,
  getProductSellerLoading: false,
  getProductSellerError: false,
  buyProductResult: false,
  buyProductLoading: false,
  buyProductError: false
}

const Product = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getAllProductResult: action.payload.data,
        getAllProductLoading: action.payload.data,
        getAllProductError: action.payload.data
      }
    case GET_SELECTED_PRODUCT:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getSelectedProductResult: action.payload.data,
        getSelectedProductLoading: action.payload.data,
        getSelectedProductError: action.payload.data
      }
    case GET_PRODUCT_SELLER:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getProductSellerResult: action.payload.data,
        getProductSellerLoading: action.payload.data,
        getProductSellerError: action.payload.data
      }
    case BUY_PRODUCT:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        buyProductResult: action.payload.data,
        buyProductLoading: action.payload.data,
        buyProductError: action.payload.data
      }
    default:
      return state;
  }
}

export default Product;