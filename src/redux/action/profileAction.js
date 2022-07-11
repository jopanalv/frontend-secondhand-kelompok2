import axios from "axios";
import { UPDATE_PROFILE } from "../type";

const API_URL = 'http://localhost:5000/api/v1'

export const updateProfile = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    const token = localStorage.getItem('accessToken')

    axios({
      method: "PUT",
      url: `${API_URL}/profile/update`,
      timeout: 120000,
      // withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
      data: data
    })
      .then(res => {
        //berhasil get API
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch(error => {
        //error get api
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  }
}

