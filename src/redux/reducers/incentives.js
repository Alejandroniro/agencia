import {
    GET_INCENTIVES_SUCCES,
    GET_INCENTIVES_FAIL,
} from '../actions/incentive/types'

const initialState = {
    incentives: null
}

export default function incentives(state=initialState,action){
    const{type, payload } = action;

    switch(type){
        case GET_INCENTIVES_SUCCES:
            return {
                ...state,
                incentives: payload.incentives
            }
        case GET_INCENTIVES_FAIL:
            return {
                ...state,
                incentives: null
            }
        default:
            return state
    }
}