import { ADD_ACCEPT_NAME, ADD_REJECT_NAME, GET_NAMES, INCREMENT, RESTART } from '../actions/name-actions';
import _ from 'lodash';
import names from '../data/names.json';

const initialState = {
    male       : _.shuffle(names.male),
    maleCount  : names.male.length,
    female     : _.shuffle(names.female),
    femaleCount: names.female.length,
    accepted   : (typeof localStorage["acceptedNames"] !== "undefined") ? JSON.parse(localStorage.getItem('acceptedNames')) : [],
    rejected   : (typeof localStorage["rejectedNames"] !== "undefined") ? JSON.parse(localStorage.getItem('rejectedNames')) : [],
    index      : 0
};

initialState.male   = handleAllAcceptedNames(initialState.male);
initialState.female = handleAllAcceptedNames(initialState.female);


export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ACCEPT_NAME: {
            return {
                ...state,
                accepted: sortByName([...state.accepted, action.payload])
            }
        }
        case ADD_REJECT_NAME: {
            return {
                ...state,
                rejected: sortByName([...state.rejected, action.payload])
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
                index   : 0,
                accepted: [],
                rejected: [],
                male    : _.shuffle(state.male),
                female  : _.shuffle(state.female)
            }
        }
        default:
            return state;
    }
}

function handleAllAcceptedNames(names) {
    if(initialState.accepted.length > 0) {
        return names.filter((obj) => {
            return isAlreadyAccepted(obj.id);
        });
    }

    return names;
}

function isAlreadyAccepted(id) {
    let result = initialState.accepted.some((obj) => {
        return obj.id === id;
    });

    return !result;
}

const alphabet = {
    "a": 1, "á": 2, "b": 3, "d": 4,"ð": 5, "e": 6, "f": 7, "g": 8, "h": 9, "i": 10, "í": 11, "j": 12, "k": 13, "l": 14, "m": 15, "n": 16, "o": 17, "ó": 18, "p": 19, "r": 20, "s": 21, "t": 22, "u": 23, "ú": 24, "v": 25, "y": 26, "ý": 27, "æ":28, "ø": 29
};

function sortByName(array) {
    return array.sort((a, b) => {
        for (let i = 0; i < a.name.length; i++) {
            if(alphabet[a.name.charAt(i).toLowerCase()] < alphabet[b.name.charAt(i).toLowerCase()]) return -1;
            if(alphabet[a.name.charAt(i).toLowerCase()] > alphabet[b.name.charAt(i).toLowerCase()]) return 1;
        }
    })
}
