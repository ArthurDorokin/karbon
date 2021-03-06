import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from "./component/redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from './localStorage'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.subscribe(()=>{
    saveState(store.getState());
})

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));