import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../common/api';
import { finishTaskSuccess, finishTaskFailure } from '../actions';

function* handleRequest(action) {
  let { payload } = action;
  console.log(payload);
  payload = yield call(api, `/api/tasks/${payload}`, 'DELETE', payload);

  if (payload) {
    yield put(finishTaskSuccess(payload));
  } else {
    yield put(finishTaskFailure(payload));
  }
}

const finishTaskSaga = [takeEvery('FINISH_TASK_REQUEST', handleRequest)];

export default finishTaskSaga;
