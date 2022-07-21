import { GET_CITY, UPDATE_PROFILE } from "../../type";

const initialState = {
  updateProfileResult: false,
  updateProfileLoading: false,
  updateProfileError: false,
  cityResult: null,
  cityLoading: false,
  cityError: null
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        updateProfileResult: action.payload.data,
        updateProfileLoading: action.payload.loading,
        updateProfileError: action.payload.errorMessage,
      };
    case GET_CITY:
      return {
        ...state,
        cityResult: action.payload.data,
        cityLoading: action.payload.loading,
        cityError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default profile;
