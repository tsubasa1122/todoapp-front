import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../common/api';
import { createTaskSuccess, createTaskFailure } from '../actions';
import { routerActions } from 'react-router-redux';

function* handleRequest(action) {
  let { payload } = action;
  payload = yield call(api, '/api/tasks', 'POST', payload);

  if (payload) {
    yield put(createTaskSuccess(payload));
    yield put(routerActions.push('/'));
  } else {
    yield put(createTaskFailure(payload));
  }
}

const createTaskSaga = [takeEvery('CREATE_TASK_REQUEST', handleRequest)];

export default createTaskSaga;
