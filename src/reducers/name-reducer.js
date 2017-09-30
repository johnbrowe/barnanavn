import  { ADD_ACCEPT_NAME, ADD_REJECT_NAME }  from '../actions/name-actions';

const initialState = {
    accepted: [],
    rejected: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ACCEPT_NAME: {
            console.log(...state);
            console.log(...state.accepted);
            console.log(action.payload);
            
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

        default:
            return state;
    }
}