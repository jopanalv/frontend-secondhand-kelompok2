import axios from "axios";
import { GET_TRANSACTION_DETAIL, ACCEPT_TRANSACTION } from "../type";
import { API_URL } from "./api";

export const getTransDetail = (id) => {
  return (dispatch) => {
    //get API
    const token = localStorage.getItem('accessToken')
    axios({
      method: "GET",
      url: `${API_URL}/transaction/detail/${id}`,
      timeout: 120000,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_TRANSACTION_DETAIL,
          payload: {
            loading: false,
            data: {
              transStatus: response.data.data.transaction.status,
              buyerName: response.data.data.transaction.Profile.name,
              buyerCity: response.data.data.transaction.Profile.city,
              buyerImage: response.data.data.transaction.Profile.image,
              buyerHp: response.data.data.transaction.Profile.no_hp,
              productName: response.data.data.product.name,
              productPrice: response.data.data.product.price,
              productImage: response.data.data.product.image,
              offer_price: response.data.data.transaction.offer_price,
              date: response.data.data.transaction.createdAt
            },
            errorMessage: false
          }
        })
      })
      .catch((error) => {
        // gagal get API
        console.log(error)
        dispatch({
          type: GET_TRANSACTION_DETAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message
          }
        })

      })
  };
};

export const acceptTransaction = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('accessToken')
    axios({
      method: "PUT",
      url: `${API_URL}/accept/${id}`,
      timeout: 120000,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: null
          }
      })
    })
    .catch(error => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: null,
            errorMessage: error.message
          }
      })
    })
  }
}

export const cancelTransaction = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('accessToken')
    axios({
      method: "PUT",
      url: `${API_URL}/cancel/${id}`,
      timeout: 120000,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: null
          }
      })
    })
    .catch(error => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: null,
            errorMessage: error.message
          }
      })
    })
  }
}

export const successTransaction = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('accessToken')
    axios({
      method: "PUT",
      url: `${API_URL}/success/${id}`,
      timeout: 120000,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(response => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: null
          }
      })
    })
    .catch(error => {
      dispatch({
        type: ACCEPT_TRANSACTION,
          payload: {
            loading: false,
            data: null,
            errorMessage: error.message
          }
      })
    })
  }
}
