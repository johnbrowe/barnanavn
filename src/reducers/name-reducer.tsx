import faroese from 'faroese-alphabet-sort'
import _ from 'lodash'

import {
    ADD_ACCEPT_NAME,
    ADD_REJECT_NAME,
    GET_NAMES,
    INCREMENT,
    RESTART
} from '../actions/name-actions'
import names from '../data/names.json'

const acceptedNames = localStorage.getItem('acceptedNames')
const rejectedNames = localStorage.getItem('rejectedNames')
let accepted: any = []
if (acceptedNames) {
    accepted = JSON.parse(acceptedNames)
}
let rejected: any = []
if (rejectedNames) {
    rejected = JSON.parse(rejectedNames)
}

const initialState = {
    male: _.shuffle(names.male),
    maleCount: names.male.length,
    female: _.shuffle(names.female),
    femaleCount: names.female.length,
    accepted,
    rejected,
    index: 0
}

initialState.male = handleAllAcceptedNames(initialState.male)
initialState.female = handleAllAcceptedNames(initialState.female)

export default function(state = initialState, action: any) {
    switch (action.type) {
        case ADD_ACCEPT_NAME: {
            return {
                ...state,
                accepted: faroese.sortArrayOfObjects([...state.accepted, action.payload], 'name')
            }
        }
        case ADD_REJECT_NAME: {
            return {
                ...state,
                rejected: faroese.sortArrayOfObjects([...state.rejected, action.payload], 'name')
            }
        }
        case GET_NAMES: {
            return {
                names
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
                rejected: [],
                male: _.shuffle(state.male),
                female: _.shuffle(state.female)
            }
        }
        default:
            return state
    }
}

// tslint:disable-next-line:no-shadowed-variable
function handleAllAcceptedNames(names: any) {
    if (initialState.accepted.length > 0) {
        return names.filter((obj: any) => {
            return isAlreadyAccepted(obj.id)
        })
    }

    return names
}

function isAlreadyAccepted(id: any) {
    const result = initialState.accepted.some((obj: any) => {
        return obj.id === id
    })

    return !result
}
