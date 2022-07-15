import axios from "axios";
import { GET_ALL_PRODUCT, GET_SELECTED_PRODUCT, GET_PRODUCT_SELLER, BUY_PRODUCT } from "../type";


const API_URL = 'http://localhost:5000/api/v1'

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
      url: `${API_URL}/products`,
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
    //get API
    axios({
      method: "GET",
      url: `${API_URL}/products/${id}`,
      timeout: 120000
    })
      .then((response) => {
        console.log("3. berhasil dapat data: ", response.data.data.Profile.name)
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

export const getProductSeller = () => {
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
      url: `${API_URL}/seller/products`,
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
export const buyProduct = (data) => {
  console.log("2. Masuk Action");
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