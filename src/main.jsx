import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import startAnimaScroll from './modules/anima-scroll.js';
import startSmoothScroll from './modules/smooth-scroll.js';


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

startAnimaScroll();
startSmoothScroll();