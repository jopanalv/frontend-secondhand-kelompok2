import { GET_TRANSACTION_DETAIL, ACCEPT_TRANSACTION, CANCEL_TRANSACTION, SUCCESS_TRANSACTION } from "../../type";

const initialState = {
  getTransactionResult: null,
  getTransactionLoading: false,
  getTransactionError: null,
  acceptTransactionResult: null,
  acceptTransactionLoading: false,
  acceptTransactionError: null,
  cancelTransactionResult: null,
  cancelTransactionLoading: false,
  cancelTransactionError: null,
  successTransactionResult: null,
  successTransactionLoading: false,
  successTransactionError: null
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
      case ACCEPT_TRANSACTION:
      return {
        ...state,
        acceptTransactionResult: action.payload.data,
        acceptTransactionLoading: action.payload.loading,
        acceptTransactionError: action.payload.errorMessage
      }
      case CANCEL_TRANSACTION:
      return {
        ...state,
        cancelTransactionResult: action.payload.data,
        cancelTransactionLoading: action.payload.loading,
        cancelTransactionError: action.payload.errorMessage
      }
      case SUCCESS_TRANSACTION:
      return {
        ...state,
        successTransactionResult: action.payload.data,
        successTransactionLoading: action.payload.loading,
        successTransactionError: action.payload.errorMessage
      }
    default:
      return state;
  }
}

export default Transaction;