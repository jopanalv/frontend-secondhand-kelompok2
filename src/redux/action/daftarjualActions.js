import axios from "axios";
import { GET_ALL_DAFTARJUAL, GET_ALL_WISHLIST, GET_ALL_TERJUAL } from "../type";

export const getAllDaftarjual = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_DAFTARJUAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false      
      }
    })

    const token = localStorage.getItem('accessToken')

    //get API
    axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/seller/products",
      timeout: 120000,
       // withCredentials: true,
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
        //berhasil get API
        dispatch({
          type: GET_ALL_DAFTARJUAL,
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
          type: GET_ALL_DAFTARJUAL,
          payload: {
          loading: false,
          data: false,
          errorMessage: error.message      
        }
        })

      })
  };
};

export const getAllWishlist = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_WISHLIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false      
      }
    })

    const token = localStorage.getItem('accessToken')

    //get API
    axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/seller/wishlist/list",
      timeout: 120000,
       // withCredentials: true,
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
        //berhasil get API
        dispatch({
          type: GET_ALL_WISHLIST,
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
          type: GET_ALL_WISHLIST,
          payload: {
          loading: false,
          data: false,
          errorMessage: error.message      
        }
        })

      })
  };
};


export const getAllTerjual = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_TERJUAL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false      
      }
    })

    const token = localStorage.getItem('accessToken')

    //get API
    axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/transaction/seller",
      timeout: 120000,
       // withCredentials: true,
       headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data)
        //berhasil get API
        dispatch({
          type: GET_ALL_TERJUAL,
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
          type: GET_ALL_TERJUAL,
          payload: {
          loading: false,
          data: false,
          errorMessage: error.message      
        }
        })

      })
  };
};