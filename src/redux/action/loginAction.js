import { LOGIN_ERROR, LOGIN, LOGOUT } from "../type";

export const addLogin = (data) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    localStorage.setItem("refreshToken", result.accessToken);

    const userInfo = await fetch("http://localhost:8000/api/v1/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${result.accessToken}`,
      },
    });
    const user = JSON.parse(JSON.stringify(await userInfo.json()));

    console.log(user);

    if (result.accessToken) {
      dispatch({
        type: LOGIN,
        payload: result.accessToken,
        user: user,
      });
    } else {
      loginError(result.error);
    }
  } catch (error) {
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
};
