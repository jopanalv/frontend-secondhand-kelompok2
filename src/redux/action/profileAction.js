import axios from "axios";
import { UPDATE_PROFILE } from "../type";
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
        localStorage.setItem("user", JSON.stringify(user));

        toast(`${res.message}`, 3000);
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

