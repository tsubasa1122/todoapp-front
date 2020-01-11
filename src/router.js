import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import routerReducer from './reducers/index';
import rootSaga from './sagas/index';

import Login from './containers/login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(routerReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log('store', store.getState()));

function Router() {
  return (
    <Provider store={store}>
      <HashRouter>
        <React.Fragment>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </React.Fragment>
      </HashRouter>
    </Provider>
  );
}
export default Router;
