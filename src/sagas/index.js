import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import tasksSaga from './tasksSaga';
import createTaskSaga from './createTaskSaga';
import finishTaskSaga from './finishTaskSaga';

export default function* rootSaga() {
  yield all([...loginSaga, ...tasksSaga, ...createTaskSaga, ...finishTaskSaga]);
}
