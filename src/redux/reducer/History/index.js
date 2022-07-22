import { GET_ALL_HISTORY } from "../../type";

const initialState = {
  getAllHistoryResult: false,
  getAllHistoryLoading: false,
  getAllHistoryError: false,
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HISTORY:
      return {
        ...state,
        getAllHistoryResult: action.payload.data,
        getAllHistoryLoading: false,
        getAllHistoryError: action.payload.message,
      };
    default:
      return state;
  }
};

export default history;
