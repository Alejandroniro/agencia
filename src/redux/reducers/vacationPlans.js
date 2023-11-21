import {
    GET_VACATIONPLANS_SUCCES,
    GET_VACATIONPLANS_FAIL,
} from '../actions/vacationPlans/types'

const initialState = {
    vacationPlans: null
}

export default function vacationPlans(state=initialState,action){
    const{type, payload } = action;

    switch(type){
        case GET_VACATIONPLANS_SUCCES:
            return {
                ...state,
                vacationPlans: payload.vacationPlans
            }
        case GET_VACATIONPLANS_FAIL:
            return {
                ...state,
                vacationPlans: null
            }
        default:
            return state
    }
}