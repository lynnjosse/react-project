
import 'babel-polyfill';
import 'raf/polyfill'
import RootComponent from './components/RootComponent'

import React from 'react'
import ReactDOM from 'react-dom'

const mountPoint = document.getElementById('app');

ReactDOM.render(
  <RootComponent />
  , mountPoint
)
