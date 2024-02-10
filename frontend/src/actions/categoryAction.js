import {
    ALL_CATEGORY_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS
} from '../constant/productConstant'

import axios from 'axios'


export const getAllCategory = () => async (dispatch) => {

    try {

        dispatch({
            type: ALL_CATEGORY_REQUEST
        })

        const { data } = await axios.get('/api/v1/categories')

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: error.response.data.error
        })
    }
}