
import 'babel-polyfill';
import 'raf/polyfill'
import RootContainer from './containers/RootContainer'

import React from 'react'
import ReactDOM from 'react-dom'

import {applyMiddleware, createStore}  from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

const App = (
  <Provider store = {store}>
    <RootContainer />
  </Provider>
)
const mountPoint = document.getElementById('app');

ReactDOM.render(
  App, mountPoint
)
