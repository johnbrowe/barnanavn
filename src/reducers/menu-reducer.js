import  { REEVALUATE }  from '../actions/menu-actions';

const initialState = {
    menuState: {
        restart: false,
        back   : true,
        info   : true
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REEVALUATE: {
            switch (window.location.pathname) {
                case "/": {
                    state.menuState.info = true;
                    return state;
                }
                case "/info": {
                    state.menuState.back = true;
                    return state;
                }
                case "/navn":
                case "/ja":
                case "/nei": {
                    state.menuState.restart = true;
                    state.menuState.info = true;
                    return state;
                }
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}
