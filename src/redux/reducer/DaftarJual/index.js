import { GET_ALL_DAFTARJUAL } from "../../type";

const initialState = {
  getAllDaftarjualResult: false,
  getAllDaftarjualLoading: false,
  getAllDaftarjualError: false,
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

    default:
      return state;
  }
}

export default Daftarjual;