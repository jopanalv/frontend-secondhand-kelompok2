import axios from "axios";
import { UPDATE_PROFILE, GET_CITY } from "../type";
import toast from "react-simple-toasts";
import { API_URL } from "./api";

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
        // update user data in local storage
        const serializedData = localStorage.getItem("user");
        let user = JSON.parse(serializedData);

        user.data.Profile.image = res.data.data.image;
        user.data.Profile.city = res.data.data.city;
        user.data.Profile.address = res.data.data.address;
        user.data.Profile.no_hp = res.data.data.no_hp;
        localStorage.setItem("user", JSON.stringify(user));

        toast(`${res.data.message}`, 3000);
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
        toast(`${error.message}`, 3000);
      });
  }
}

export const getCity = () => {
  return (dispatch) => {
    //get API
    axios({
      method: "GET",
      url: `https://kabupatenid.herokuapp.com/kabupaten/list`,
    })
      .then((response) => {
        //berhasil get API
        console.log("respon" + response.data)
        dispatch({
          type: GET_CITY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: null
          }
        })
      })
      .catch((error) => {
        // gagal get API
        console.log("error block")
        dispatch({
          type: GET_CITY,
          payload: {
            loading: false,
            data: null,
            errorMessage: error.message
          }
        })
      })
  };
};