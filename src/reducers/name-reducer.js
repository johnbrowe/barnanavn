import  { ADD_ACCEPT_NAME, ADD_REJECT_NAME, MOVE_TO_REJECTED, MOVE_TO_ACCEPTED, GET_NAMES, INCREMENT, RESTART }  from '../actions/name-actions';
import _ from 'lodash';
import names from '../data/names.json';

const initialState = {
    male: _.shuffle(names.male),
    maleCount: names.male.length,
    female: _.shuffle(names.female),
    femaleCount: names.female.length,
    accepted: (typeof localStorage["acceptedNames"] != "undefined") ? JSON.parse(localStorage.getItem('acceptedNames')) : [],
    rejected: (typeof localStorage["rejectedNames"] != "undefined") ? JSON.parse(localStorage.getItem('rejectedNames')) : [],
    index: 0
}

initialState.male = handleAllAcceptedNames(initialState.male);
initialState.female = handleAllAcceptedNames(initialState.female);


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

        case MOVE_TO_ACCEPTED: {
            // TODO: Make this more perfomant
            let rejected = state.rejected.filter(name => name.id != action.payload);
            let name = state.rejected.filter(name => name.id == action.payload);

            return {
                ...state,
                rejected: rejected,
                accepted: [...state.accepted, name[0]], 
            } 
        }
        
        case MOVE_TO_REJECTED: {
            // TODO: Make this more perfomant
            let accepted = state.accepted.filter(name => name.id != action.payload);
            let name = state.accepted.filter(name => name.id == action.payload);

            return {
                ...state,
                accepted: accepted,
                rejected: [...state.rejected, name[0]], 
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
                rejected: [],
                male: _.shuffle(state.male),
                female: _.shuffle(state.female)
            }        
        }

        default:
            return state;
    }
}


function handleAllAcceptedNames(names) {
    if (initialState.accepted.length > 0) {
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

function handleAllRejectedNames() {
    if (this.props.names.rejected.length > 0) {
      this.state.names = this.state.names.filter((obj) => {
        return this.isAlreadyRejected(obj.id);
      });
    }
  }

function isAlreadyRejected(id) {
    let result = this.state.rejected.some((obj) => {
        return obj.id === id;
    });

    return !result;
}
