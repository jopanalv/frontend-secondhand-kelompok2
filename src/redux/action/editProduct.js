import { EDIT_PRODUCT, GET_ALL_DAFTARJUAL, DELETE_PRODUCT } from "../type";
import axios from "axios";
import { API_URL } from "./api";
import toast from "react-simple-toasts";

export const editProduct = (data, id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: EDIT_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const token = localStorage.getItem("accessToken");

    axios({
      method: "PUT",
      url: `${API_URL}/products/${id}`,
      timeout: 120000,
      // withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((res) => {
        //berhasil get API
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //error get api
        dispatch({
          type: EDIT_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem("accessToken");

    axios({
      method: "DELETE",
      url: `${API_URL}/products/${id}`,
      timeout: 120000,
      // withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast(`Success delete product`, 3000);
        dispatch(DELETE_PRODUCT());
        // dispatch(GET_ALL_DAFTARJUAL());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
