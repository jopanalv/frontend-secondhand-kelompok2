import { GET_ALL_DAFTARJUAL, GET_ALL_WISHLIST, GET_ALL_TERJUAL } from "../../type";

const initialState = {
  getAllDaftarjualResult: false,
  getAllDaftarjualLoading: false,
  getAllDaftarjualError: false,

  getAllWishlistResult: false,
  getAllWishlistLoading: false,
  getAllWishlistError: false,

  getAllTerjualResult: false,
  getAllTerjualLoading: false,
  getAllTerjualError: false,
}

const Daftarjual = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_DAFTARJUAL:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getAllDaftarjualResult: action.payload.data,
        getAllDaftarjualLoading: action.payload.data,
        getAllDaftarjualError: action.payload.data
      }

    case GET_ALL_WISHLIST:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getAllWishlistResult: action.payload.data,
        getAllWishlistLoading: action.payload.data,
        getAllWishlistError: action.payload.data
      }  

    case GET_ALL_TERJUAL:
      console.log("4. Masuk Reducer", action)
      return {
        ...state,
        getAllTerjualResult: action.payload.data,
        getAllTerjualLoading: action.payload.data,
        getAllTerjualError: action.payload.data
      }   

    default:
      return state;
  }
}

export default Daftarjual;