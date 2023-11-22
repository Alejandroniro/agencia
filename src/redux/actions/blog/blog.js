import axios from 'axios'
import {
    GET_BLOGS_SUCCES,
    GET_BLOGS_FAIL,
} from './types';

export const get_blogs = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BLOGS_SUCCES,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BLOGS_FAIL
            });
        }
    } catch (error) {
        dispatch({
            type: GET_BLOGS_FAIL
        })
    }
}