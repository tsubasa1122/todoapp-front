import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import routerReducer from './reducers/index';
import rootSaga from './sagas/index';

import Login from './containers/login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(routerReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log('store', store.getState()));

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default Router;
