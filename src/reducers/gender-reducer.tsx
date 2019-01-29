import {SELECT_GENDER} from '../actions/gender-actions'

let gender = localStorage.getItem('gender')
if (gender) {
    gender = JSON.parse(gender)
}
const initialState = {
    selected: gender
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SELECT_GENDER: {
            return {
                ...state,
                selected: action.payload
            }
        }

        default:
            return state
    }
}
