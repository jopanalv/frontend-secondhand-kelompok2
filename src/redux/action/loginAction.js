import { LOGIN_ERROR, LOGIN, LOGOUT } from "../type";
import jwtDecode from "jwt-decode";
import toast from "react-simple-toasts";
import { API_URL } from "./api";

export const addLogin = (data) => async (dispatch) => {
  
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (result.statusCode === 302) {
      localStorage.setItem("accessToken", result.accessToken);
      const req = jwtDecode(localStorage.getItem("accessToken"))

      const userInfo = await fetch(`${API_URL}/user/${req.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${result.accessToken}`,
        },
      });
      const user = await userInfo.json();
      console.log(user)
      if (result.accessToken) {
        localStorage.setItem("user", JSON.stringify(user))
        dispatch({
          type: LOGIN,
          payload: result.accessToken,
          user: user,
        });
        toast(`${result.message}`, 3000);
      }
      // window.location.href = "/"
    }
    if (result.statusCode === 401) {
      throw result     
    }
  } catch (error) {
    toast(`${error.message}`, 3000);
    loginError(error);
  }
};

const loginError = (error) => async (dispatch) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: LOGIN_ERROR,
      payload: null,
    });
  }, 5000);
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  toast(`Success logout`, 3000);
};
