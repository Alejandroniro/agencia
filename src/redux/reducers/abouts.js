import {
    GET_ABOUTS_SUCCES,
    GET_ABOUTS_FAIL,
} from '../actions/about/types'

const initialState = {
    abouts: null
}

export default function abouts(state=initialState,action){
    const{type, payload } = action;

    switch(type){
        case GET_ABOUTS_SUCCES:
            return {
                ...state,
                abouts: payload.abouts
            }
        case GET_ABOUTS_FAIL:
            return {
                ...state,
                abouts: null
            }
        default:
            return state
    }
}