import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../common/api';
import { getTasks, failTasks } from '../actions';

function* tasksHandleRequest(action) {
  let { payload } = action;
  console.log(1);
  console.log(action);
  payload = yield call(api, '/api/tasks', 'GET');

  if (payload) {
    yield put(getTasks(payload));
  } else {
    yield put(failTasks(payload));
  }
}

const tasksSaga = [takeEvery('TASKS_REQUEST', tasksHandleRequest)];
export default tasksSaga;
