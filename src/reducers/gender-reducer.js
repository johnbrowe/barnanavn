import  { SELECT_GENDER }  from '../actions/gender-actions';

const initialState = {
    selected: (typeof localStorage["gender"] != "undefined") ? JSON.parse(localStorage.getItem('gender')) : null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_GENDER: {
            return {
                ...state,
                selected: action.payload
            }
        }

        default:
            return state;
    }
}