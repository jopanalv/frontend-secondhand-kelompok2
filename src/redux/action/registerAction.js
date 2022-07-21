import axios from "axios";
import toast from "react-simple-toasts";
import { ADD_REGISTER } from "../type";
import {API_URL} from "./api";

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
        toast(`${response.message}`, 3000);
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
        toast(`${error.message}`, 3000);
      });
  };
};
