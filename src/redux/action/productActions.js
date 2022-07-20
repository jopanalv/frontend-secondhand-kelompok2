import axios from "axios";
import toast from "react-simple-toasts";
import { GET_ALL_PRODUCT, GET_SELECTED_PRODUCT, GET_PRODUCT_SELLER, BUY_PRODUCT, ALL_CATEGORIES } from "../type";
import { API_URL } from "./api";

export const getAllProduct = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    })

    //get API
    axios({
      method: "GET",
      url: `${API_URL}/products`,
      timeout: 120000
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: {
            loading: true,
            data: response.data.data,
            errorMessage: false
          }
        })
      })
      .catch((error) => {
        // gagal get API
        dispatch({
          type: GET_ALL_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message
          }
        })

      })
  };
};

export const getSelectedProduct = (id) => {
  return (dispatch) => {
    //get API
    axios({
      method: "GET",
      url: `${API_URL}/products/${id}`,
      timeout: 120000
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_SELECTED_PRODUCT,
          payload: {
            loading: false,
            data: {
              name: response.data.data.name,
              image: response.data.data.image,
              id: response.data.data.id,
              price: response.data.data.price,
              description: response.data.data.description,
              CategoryId: response.data.data.CategoryId,
              sellerName: response.data.data.Profile.name,
              sellerCity: response.data.data.Profile.city,
              sellerImage: response.data.data.Profile.image
            },
            errorMessage: false
          }
        })
      })
      .catch((error) => {
        // gagal get API
        dispatch({
          type: GET_SELECTED_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message
          }
        })

      })
  };
};

export const getProductSeller = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_PRODUCT_SELLER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    })

    //get API
    axios({
      method: "GET",
      url: `${API_URL}/seller/products`,
      timeout: 120000
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_PRODUCT_SELLER,
          payload: {
            loading: true,
            data: response.data.data,
            errorMessage: false
          }
        })
      })
      .catch((error) => {
        // gagal get API
        dispatch({
          type: GET_PRODUCT_SELLER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message
          }
        })

      })
  };
};
export const buyProduct = (data) => {
  const token = localStorage.getItem('accessToken')
  return (dispatch) => {
    //loading
    dispatch({
      type: BUY_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false
      }
    })
    console.log(data)
    //get API
    axios({
      method: "POST",
      url: `${API_URL}/buy/${data.id}`,
      timeout: 120000,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        'offer_price': data.offer
      }
    })
      .then((response) => {
        //berhasil get API
        console.log(response.data)
        if (response.statusCode !== 201) {
          dispatch({
            type: BUY_PRODUCT,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            }
          })
          toast(`${response.data.message}`, 3000);
        }
      })
      .catch((error) => {
        // gagal get API
        dispatch({
          type: BUY_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          }
        })
        toast(`${error.message}`, 3000);
      })
  };
};

export const categoryList = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/category/list`,
    })
    .then((response) => {
      dispatch({
        type: ALL_CATEGORIES,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch({
        type: ALL_CATEGORIES,
        payload: error.message
      })
    })
  }
}