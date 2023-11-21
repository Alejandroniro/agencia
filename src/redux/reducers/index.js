import { combineReducers } from 'redux';
import abouts from './abouts';
import blogs from './blogs';
import dealSections from './dealSections';
import incentives from './incentives';
import vacationPlans from './vacationPlans';

export default combineReducers({
    abouts,
    blogs,
    dealSections,
    incentives,
    vacationPlans,
})