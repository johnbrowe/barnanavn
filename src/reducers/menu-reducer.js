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
            console.log('oiiiiiiiiiiiiiiiiiiiiiii');
            console.log(window.location.pathname);
            switch (window.location.pathname) {
                case "/": {
                    state.menuState.info = true;
                    return state;
                }
                case "/info": {
                    state.menuState.back = true;
                    return state;
                }
                case "/navn": {
                    state.menuState.restart = true;
                    state.menuState.info = true;
                    console.log('state')
                    console.log(state)
                    return state;
                }
                case "/ja": {
                    state.menuState.restart = true;
                    state.menuState.info = true;
                    return state;
                }
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
