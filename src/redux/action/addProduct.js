import axios from "axios";
import { ADD_PRODUCT } from "../type";

export const addProduct = (params) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("userId", localStorage.getItem(`user.id`));
    formdata.append("name", params.name);
    formdata.append("price", params.price);
    formdata.append("categoryId", params.catagoryId);
    formdata.append("description", params.description);

    if (params.image.length > 0) {
      if (
        (params.image[0].type === "image/jpeg",
        params.image[0].type === "image/png")
      ) {
        formdata.append("image", params.image[0]);
      }
      if (
        (params.image[1].type === "image/jpeg",
        params.image[1].type === "image/png")
      ) {
        formdata.append("image", params.image[1]);
      }
      if (
        (params.image[2].type === "image/jpeg",
        params.image[2].type === "image/png")
      ) {
        formdata.append("image", params.image[2]);
      }
      if (
        (params.image[3].type === "image/jpeg",
        params.image[3].type === "image/png")
      ) {
        formdata.append("image", params.image[3]);
      }
    }

    const response = await fetch(
      "https://be-secondhand-staging.herokuapp.com/api/v1/products",
      {
        method: "POST",
        body: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    const result = await response.json();

    dispatch({
      type: ADD_PRODUCT,
      payload: result.params,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT,
      payload: error.response,
    });
  }
};
