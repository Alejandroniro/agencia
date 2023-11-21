import axios from 'axios'
import {
    GET_VACATIONPLANS_SUCCES,
    GET_VACATIONPLANS_FAIL,
} from './types';

export const get_vacationPlans = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/vacationPlan/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_VACATIONPLANS_SUCCES,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_VACATIONPLANS_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: GET_VACATIONPLANS_FAIL
        })
    }
}