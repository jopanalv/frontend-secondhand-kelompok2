import { ADD_PRODUCT } from "../type";
import jwtDecode from "jwt-decode";
import toast from "react-simple-toasts";
import { API_URL } from "./api";

export const addProduct = (data) => async (dispatch) => {

  const token = localStorage.getItem("accessToken")
  const user = jwtDecode(token)
  const role = user.role
  if (role === 'seller') {
    try {
      const response = await fetch(
        `${API_URL}/products`,
        {
          method: "POST",
          body: data,
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      console.log(result.statusCode)
      dispatch({
        type: ADD_PRODUCT,
        payload: result,
      });

      toast(`${result.message}`, 3000);
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT,
        payload: error.message,
      });
      toast(`${error.message}`, 3000);
    }
  }
};
