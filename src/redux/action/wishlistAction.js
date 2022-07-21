import axios from "axios";
import toast from "react-simple-toasts";
import {
  ADD_WISHLIST_BUYER,
  DELETE_WISHLIST_BUYER,
  WISHLIST_BUYER,
} from "../type";
import { API_URL } from "./api";

export const getListWishlistBuyer = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: WISHLIST_BUYER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    axios({
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      url: `${API_URL}/buyer/wishlist/list`,
      timeout: 120000,
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: WISHLIST_BUYER,
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
          type: WISHLIST_BUYER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

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
      url: `${API_URL}/products/wishlist/` + data,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //berhasil get API
        console.log(response.data);
        dispatch({
          type: ADD_WISHLIST_BUYER,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        toast(`${response.data.message}`);
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

export const deleteWishlist = (id) => {
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
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      url: `${API_URL}/buyer/wishlist/` + id,
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
