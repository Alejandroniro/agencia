import axios from 'axios'
import {
    GET_ABOUTS_SUCCES,
    GET_ABOUTS_FAIL,
} from './types';

export const get_abouts = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/about/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_ABOUTS_SUCCES,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_ABOUTS_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ABOUTS_FAIL
        })
    }
}