import {
    GET_BLOGS_SUCCES,
    GET_BLOGS_FAIL,
} from '../actions/blog/types'

const initialState = {
    blogs: null
}

export default function blogs(state=initialState,action){
    const{type, payload } = action;

    switch(type){
        case GET_BLOGS_SUCCES:
            return {
                ...state,
                blogs: payload.blogs
            }
        case GET_BLOGS_FAIL:
            return {
                ...state,
                blogs: null
            }
        default:
            return state
    }
}