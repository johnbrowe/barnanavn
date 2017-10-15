import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import { composeWithDevTools } from 'redux-devtools-extension';


// Set initial store state
let localStorageState = {
    accepted: (typeof localStorage["acceptedNames"] != "undefined") ? JSON.parse(localStorage.getItem('acceptedNames')) : [],
    rejected: (typeof localStorage["rejectedNames"] != "undefined") ? JSON.parse(localStorage.getItem('rejectedNames')) : []
}

// Add all changes to localstorage
store.subscribe(() => {
    let state = store.getState();
    localStorage.setItem('acceptedNames', JSON.stringify(state.names.accepted));
    localStorage.setItem('rejectedNames', JSON.stringify(state.names.rejected));
    localStorage.setItem('gender', JSON.stringify(state.gender.selected));
});

window.react = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();