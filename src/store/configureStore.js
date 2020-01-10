import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from '../reducers/';
import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddleware = applyMiddleware(sagaMiddleware, logger());
  const enhancer = process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware) : applyMiddleware;
  const store = createStore(reducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
