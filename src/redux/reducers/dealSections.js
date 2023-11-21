import {
    GET_DEALSECTIONS_SUCCES,
    GET_DEALSECTIONS_FAIL,
} from '../actions/dealSection/types'

const initialState = {
    dealSections: null
}

export default function dealSections(state=initialState,action){
    const{type, payload } = action;

    switch(type){
        case GET_DEALSECTIONS_SUCCES:
            return {
                ...state,
                dealSections: payload.dealSections
            }
        case GET_DEALSECTIONS_FAIL:
            return {
                ...state,
                dealSections: null
            }
        default:
            return state
    }
}