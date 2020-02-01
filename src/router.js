import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducers/index';
import rootSaga from './sagas/index';

import Login from './containers/login';
import Tasks from './containers/Tasks';
import NewTask from './containers/NewTask';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history), logger))
);
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log('store', store.getState()));

export function Router() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Tasks} />
          <Route exact path="/tasks/new" component={NewTask} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
