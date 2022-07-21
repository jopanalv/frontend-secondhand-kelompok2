import { ADD_PRODUCT } from "../../type";

const initialState = {
  addProductResult: "",
  addProductLoading: false,
  addProductError: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload,
        addProductLoading: false,
        addProductError: action.payload.message,
      };
    default:
      return state;
  }
};

export default product;
