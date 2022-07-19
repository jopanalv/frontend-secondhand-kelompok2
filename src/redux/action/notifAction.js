import axios from "axios";
import { GET_ALL_NOTIF_SELLER, GET_ALL_NOTIF_BUYER } from "../type";

const API_URL = 'http://localhost:5000/api/v1'

export const getNotifSeller = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_ALL_NOTIF_SELLER,
            payload: {
                loading: true,
                data: null,
                errorMessage: null
            }
        })

        const token = localStorage.getItem('accessToken')
        //get API
        axios({
            method: "GET",
            url: `${API_URL}/notif/seller`,
            timeout: 120000,
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then((response) => {
                //berhasil get API
                dispatch({
                    type: GET_ALL_NOTIF_SELLER,
                    payload: {
                        loading: true,
                        data: response.data.data,
                        errorMessage: null
                    }
                })
            })
            .catch((error) => {
                // gagal get API
                dispatch({
                    type: GET_ALL_NOTIF_SELLER,
                    payload: {
                        loading: false,
                        data: null,
                        errorMessage: error.message
                    }
                })

            })
    };
};

export const getNotifBuyer = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ALL_NOTIF_BUYER,
            payload: {
                loading: true,
                data: null,
                errorMessage: null
            }
        })
        //get API
        const token = localStorage.getItem('accessToken')
        axios({
            method: "GET",
            url: `${API_URL}/notif/buyer`,
            timeout: 120000,
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then((response) => {
                //berhasil get API
                console.log('resp'+response.data)
                dispatch({
                    type: GET_ALL_NOTIF_BUYER,
                    payload: {
                        loading: false,
                        data: response.data.data,
                        errorMessage: null
                    }
                })
            })
            .catch((error) => {
                // gagal get API
                dispatch({
                    type: GET_ALL_NOTIF_BUYER,
                    payload: {
                        loading: false,
                        data: null,
                        errorMessage: error.message
                    }
                })
            })
    };
};