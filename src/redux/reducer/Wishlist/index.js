import {
  WISHLIST_BUYER,
  ADD_WISHLIST_BUYER,
  DELETE_WISHLIST_BUYER,
} from "../../type";

const initialState = {
  getListWishlistBuyerResult: false,
  getListWishlistBuyerLoading: false,
  getListWishlistBuyerError: false,

  addWishlistResult: false,
  addWishlistLoading: false,
  addWishlistError: false,

  deleteWishlistResult: false,
  deleteWishlistLoading: false,
  deleteWishlistError: false,
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case WISHLIST_BUYER:
      return {
        ...state,
        getListWishlistBuyerResult: action.payload.data,
        getListWishlistBuyerLoading: action.payload.loading,
        getListWishlistBuyerError: action.payload.errorMessage,
      };

    case ADD_WISHLIST_BUYER:
      return {
        ...state,
        addWishlistResult: action.payload.data,
        addWishlistLoading: action.payload.loading,
        addWishlistError: action.payload.errorMessage,
      };

    case DELETE_WISHLIST_BUYER:
      return {
        ...state,
        deleteWishlistResult: action.payload.data,
        deleteWishlistLoading: action.payload.loading,
        deleteWishlistError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default wishlist;
