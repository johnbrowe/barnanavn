import  { RENDER }  from '../actions/menu-actions';

const initialState = {
    menuState: {
        info: false,
        back: false,
        restart: false
    }
};

const HOME = "/";
const NAME = "/navn";
const INFO = "/info";

export default function (state = initialState, action) {
    switch (action.type) {
        case RENDER: {
            const pathname = window.location.pathname;
            let menuState = state;

            switch (pathname) {
                case HOME: {
                    menuState = {
                        info: true,
                        back: false,
                        restart: false
                    }
                    break;
                }
                case NAME: {
                    menuState = {
                        info: true,
                        back: false,
                        restart: true
                    }
                    break;
                }
                case INFO: {
                    menuState = {
                        info: false,
                        back: true,
                        restart: false
                    }
                    break;
                }
            }

            return {...state, menuState};
        }
        default:
            return state;
    }
}
