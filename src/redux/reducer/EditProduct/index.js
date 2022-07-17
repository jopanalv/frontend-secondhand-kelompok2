import { EDIT_PRODUCT, DELETE_PRODUCT } from "../../type";

const initialState = {
  editProductResult: false,
  editProductLoading: false,
  editProductError: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {
        ...state,
        editProductResult: action.payload.data,
        editProductLoading: action.payload.loading,
        editProductError: action.payload.message,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductResult: action.payload,
        deleteProductLoading: false,
        deleteProductError: action.payload.message,
      };  
    default:
      return state;
  }
};

export default product;
