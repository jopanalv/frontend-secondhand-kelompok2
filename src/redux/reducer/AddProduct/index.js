import { ADD_PRODUCT } from "../../type";

const initialState = {
  addProductResult: false,
  addProductLoading: false,
  addProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default product;
