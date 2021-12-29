// DESCRIPTION:
// entry point for application, hangs React app off of #root in index.html

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App.jsx';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/index';
import { combineReducers } from 'redux';
import boxesReducer from './reducers/boxesReducer.js';
import sequenceReducer from './reducers/sequenceReducer.js';

const reducers = combineReducers({
    boxes: boxesReducer,
    sequence: sequenceReducer,
})

const store = createStore(
    reducers,
    composeWithDevTools()
  );

render (
    <Provider store={store}>
        <App type="module"/>
    </Provider>,
    document.getElementById('root')
)