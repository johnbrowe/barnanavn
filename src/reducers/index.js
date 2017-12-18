import { combineReducers } from 'redux';
import nameReducer from './name-reducer';
import genderReducer from './gender-reducer';
import infoReducer from './info-reducer';

const allReducers = {
    names : nameReducer,
    gender: genderReducer,
    info  : infoReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
