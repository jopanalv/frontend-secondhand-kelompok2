import axios from "axios";
import { GET_ALL_HISTORY } from "../type";
import { API_URL } from "./api";

export const getAllHistory = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_HISTORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: `${API_URL}/transaction/buyer`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_ALL_HISTORY,
          payload: {
            loading: true,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal get API
        dispatch({
          type: GET_ALL_HISTORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
