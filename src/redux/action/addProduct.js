import { ADD_PRODUCT } from "../type";
import jwtDecode from "jwt-decode"

const API_URL = 'http://localhost:5000/api/v1'

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
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT,
        payload: error.message,
      });
    }
  }
};
