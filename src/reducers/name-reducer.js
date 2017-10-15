import  { ADD_ACCEPT_NAME, ADD_REJECT_NAME, GET_NAMES, INCREMENT, RESTART }  from '../actions/name-actions';
import { Shuffle } from 'lodash';
import names from '../data/names.json';

console.log(names)

const initialState = {
    //names: (typeof localStorage["gender"] != "undefined") ? Shuffle(names[JSON.parse(localStorage.getItem('gender'))]) : [],
    names: names,
    accepted: [],
    rejected: [],
    index: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ACCEPT_NAME: {
            return {
                ...state,
                accepted: [...state.accepted, action.payload]
            }
        }

        case ADD_REJECT_NAME: {
                return {
                ...state,
                rejected: [...state.rejected, action.payload]
            }
        }

        case GET_NAMES: {
            return {
                names: names
            }
        }

        case INCREMENT: {
            return {
                ...state,
                index: state.index + 1
            }        
        }
        
        case RESTART: {
            return {
                ...state,
                index: 0,
                accepted: [],
                rejected: []
            }        
        }

        default:
            return state;
    }
}