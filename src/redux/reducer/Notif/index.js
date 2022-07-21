import { GET_ALL_NOTIF_SELLER, GET_ALL_NOTIF_BUYER } from "../../type";

const initialState = {
  getNotifSellerResult: null,
  getNotifSellerLoading: false,
  getNotifSellerError: null,
  getNotifBuyerResult: null,
  getNotifBuyerLoading: false,
  getNotifBuyerError: null
}

const Notif = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIF_SELLER:
      return {
        ...state,
        getNotifSellerResult: action.payload.data,
        getNotifSellerLoading: action.payload.loading,
        getNotifSellerError: action.payload.errorMessage
      }
    case GET_ALL_NOTIF_BUYER:
      return {
        ...state,
        getNotifBuyerResult: action.payload.data,
        getNotifBuyerLoading: action.payload.loading,
        getNotifBuyerError: action.payload.errorMessage
      }
    default:
      return state;
  }
}

export default Notif;