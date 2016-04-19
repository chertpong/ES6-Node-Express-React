import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { API_URL } from './config';

import App from './component/App';
import Home from './component/home/Home.js';

import './style/style.scss';
import 'material-design-icons/iconfont/material-icons.css';
injectTapEventPlugin();
render(
  (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
  )
  , document.querySelector('#app')
);
