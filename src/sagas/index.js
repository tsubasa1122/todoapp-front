import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import tasksSaga from './tasksSaga';

export default function* rootSaga() {
  yield all([...loginSaga, ...tasksSaga]);
}
