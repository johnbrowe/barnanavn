import { combineReducers } from 'redux';
import nameReducer from './name-reducer';

const allReducers = {
  names: nameReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;