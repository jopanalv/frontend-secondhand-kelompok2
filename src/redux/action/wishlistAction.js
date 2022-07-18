import axios from "axios";
import { ADD_WISHLIST_BUYER, DELETE_WISHLIST_BUYER } from "../type";

const API_URL = "http://localhost:5000/api/v1";

export const addWishlist = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_WISHLIST_BUYER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      url: `${API_URL}/products/wishlist/` + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get API
        console.log(response);
        dispatch({
          type: ADD_WISHLIST_BUYER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //error get api
        console.log(error);
        dispatch({
          type: ADD_WISHLIST_BUYER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteWishlist = (id, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_WISHLIST_BUYER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` },
      url: `${API_URL}/buyer/wishlist/list` + id,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get api
        dispatch({
          type: DELETE_WISHLIST_BUYER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_WISHLIST_BUYER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
