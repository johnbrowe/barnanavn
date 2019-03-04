import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

// Add all changes to localstorage
store.subscribe(() => {
    let state = store.getState()
    localStorage.setItem('acceptedNames', JSON.stringify(state.names.accepted))
    localStorage.setItem('rejectedNames', JSON.stringify(state.names.rejected))
    localStorage.setItem('gender', JSON.stringify(state.gender.selected))
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
registerServiceWorker()
