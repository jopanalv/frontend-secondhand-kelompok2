import { GET_TRANSACTION_DETAIL } from "../../type";

const initialState = {
  getTransactionResult: null,
  getTransactionLoading: false,
  getTransactionError: null
}

const Transaction = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_DETAIL:
      return {
        ...state,
        getTransactionResult: action.payload.data,
        getTransactionLoading: action.payload.loading,
        getTransactionError: action.payload.errorMessage
      }
    default:
      return state;
  }
}

export default Transaction;