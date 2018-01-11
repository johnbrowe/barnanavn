import { combineReducers } from 'redux';
import nameReducer from './name-reducer';
import genderReducer from './gender-reducer';
import infoReducer from './info-reducer';
import menuReducer from './menu-reducer';

const allReducers = {
    names : nameReducer,
    gender: genderReducer,
    info  : infoReducer,
    menu : menuReducer 
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
