import { combineReducers } from 'redux';
import nameReducer from './name-reducer';
import genderReducer from './gender-reducer';

const allReducers = {
  names: nameReducer,
  gender: genderReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;