import axios from "axios";

const UPDATE_PROFILE = "UPDATE_PROFILE";

export const updateProfile = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/profile/update/" + data.id,
      timeout: 120000,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //error get api
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
