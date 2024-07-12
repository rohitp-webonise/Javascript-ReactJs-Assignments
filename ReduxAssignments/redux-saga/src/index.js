

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import postReducer from './reducers/postReducer';
import postSaga from './sagas/postSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(postReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(postSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
