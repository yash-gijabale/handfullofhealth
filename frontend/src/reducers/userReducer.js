
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
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS
} from "../constant/userConstant"

export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case USER_REQUEST:
            return {
                loading: true,
                isAuthenticate: false,
                user: {}
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case USER_SUCCESS:
            return {
                loading: false,
                isAuthenticate: true,
                user: action.payload
            }

        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                loading: false,
                isAuthenticate: false,
                error: action.payload
            }
        case USER_FAIL:
            return {
                oading: false,
                isAuthenticate: false,
                user: false
            }

        case LOGOUT_REQUEST:
            return {
                loading: false,
                ...state
            }

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticate: false,
                user: false
            }

        case LOGIN_FAIL:
            return {
                ...state

            }

        default:
            return state
    }
}