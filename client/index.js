import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import App from './components/App';
import rootSaga from './saga/root-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory));
const store = createStore(reducers, composeEnhancers(middlewares));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
