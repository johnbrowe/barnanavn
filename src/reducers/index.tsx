import {combineReducers} from 'redux'

import genderReducer from './gender-reducer'
import nameReducer from './name-reducer'

const allReducers = {
    names: nameReducer,
    gender: genderReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer
