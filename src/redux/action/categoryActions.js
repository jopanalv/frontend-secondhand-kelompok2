import axios from "axios";
import { GET_CATEGORY } from "../types";
// let token = localStorage.getItem("token");

export const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_CATEGORY}_LOADING` });

    axios({
      method: "GET",
      url: "https://5000/api/v1/categories",
    })
      .then((response) => {
        // console.log(response.data.data, "CEK RESPONSE PROVINSI ACTION COKKK");
        dispatch({
          type: `${GET_CATEGORY}_FULFILLED`,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_CATEGORY}_ERROR`,
          error: error.message,
        });
      });
  };
};