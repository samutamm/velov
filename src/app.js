import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { StationList } from './containers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

render(
  <Provider store={store}>
    <StationList />
  </Provider>,
  document.getElementById('app')
);
