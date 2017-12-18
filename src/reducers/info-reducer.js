import  { OPEN }  from '../actions/info-actions';
import  { CLOSE }  from '../actions/info-actions';

const initialState = {
    modalState: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN: {
            return {
                ...state,
                modalState: action.payload
            }
        }
        case CLOSE: {
            return {
                ...state,
                modalState: action.payload
            }
        }

        default:
            return state;
    }
}
