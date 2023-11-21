import axios from 'axios'
import {
    GET_INCENTIVES_SUCCES,
    GET_INCENTIVES_FAIL,
} from './types';

export const get_incentives = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/incentive/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_INCENTIVES_SUCCES,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_INCENTIVES_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: GET_INCENTIVES_FAIL
        })
    }
}