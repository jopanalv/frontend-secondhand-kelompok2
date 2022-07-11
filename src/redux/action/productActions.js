import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_SELECTED_PRODUCT = "GET_SELECTED_PRODUCT";
export const GET_PRODUCT_SELLER = "GET_PRODUCT_SELLER"


export const getAllProduct = () => {
  console.log("2. Masuk Action");
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
      url: "http://localhost:8000/api/v1/products/",
      timeout: 120000
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
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
        console.log("3. gagal dapat data: ", error.message)
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
  console.log("2. Masuk Action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_SELECTED_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false      
      }
    })

    //get API
    axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/products/:id` + id,
      timeout: 120000
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
        //berhasil get API
        dispatch({
          type: GET_SELECTED_PRODUCT,
          payload: {
          loading: true,
          data: response.data.data,
          errorMessage: false      
        }
        })  
      })
      .catch((error) => {
        console.log("3. gagal dapat data: ", error.message)
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

export const getProductSeller = (id) => {
  console.log("2. Masuk Action");
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
      url: `http://localhost:8000/api/v1/seller/products/:id` + id,
      timeout: 120000
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
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
        console.log("3. gagal dapat data: ", error.message)
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