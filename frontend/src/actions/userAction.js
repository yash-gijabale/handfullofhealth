import {
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from "../constant/userConstant"
import axios from 'axios'


export const login = (userData) => async (dispatch) => {

    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const { data } = await axios.post('/api/v1/login', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.error
        })
    }
}


export const registerUser = (userData) => async (dispatch) => {
    try {

        dispatch({
            type: REGISTER_REQUEST
        })

        const { data } = await axios.post('/api/v1/newUser', userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.error
        })
    }
}


export const loadUser = () => async (dispatch) => {
    try {

        dispatch({
            type: USER_REQUEST
        })

        const { data } = await axios.get('/api/v1/me')

        dispatch({
            type: USER_SUCCESS,
            payload: data.result
        })

    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.response.data.error
        })
    }
}


export const logout = () => async (dispatch) => {
    try {

        dispatch({
            type: LOGOUT_REQUEST
        })

        const { data } = await axios.get('/api/v1/logout')

        dispatch({
            type: LOGOUT_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error.response.data.error
        })

    }

}