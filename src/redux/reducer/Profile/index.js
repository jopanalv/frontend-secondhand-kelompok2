import { UPDATE_PROFILE } from "../../action/profileAction";

const initialState = {
  updateProfileResult: false,
  updateProfileLoading: false,
  updateProfileError: false,
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

    default:
      return state;
  }
};

export default profile;
