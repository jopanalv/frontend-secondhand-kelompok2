import axios from "axios";
import { ADD_REGISTER } from "../type";

const API_URL = 'http://localhost:5000/api/v1'

export const addRegister = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_REGISTER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      url: `${API_URL}/register`,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get API
        console.log(response);
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        window.location.href = "/login";
      })
      .catch((error) => {
        //error get api
        console.log("error ", error);
        dispatch({
          type: ADD_REGISTER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
