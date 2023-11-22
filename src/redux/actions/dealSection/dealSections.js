import axios from 'axios'
import {
    GET_DEALSECTIONS_SUCCES,
    GET_DEALSECTIONS_FAIL,
} from './types';

export const get_dealSections = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/dealSection/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_DEALSECTIONS_SUCCES,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_DEALSECTIONS_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: GET_DEALSECTIONS_FAIL
        })
    }
}