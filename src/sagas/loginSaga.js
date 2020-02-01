import { call, put, takeEvery } from 'redux-saga/effects';
import loginApi from '../common/api';
import { loginSuccess, loginFailure } from '../actions';
import { routerActions } from 'react-router-redux';

function* handleRequest(action) {
  let { payload } = action;
  payload = yield call(loginApi, '/api/auth/sign_in', 'POST', payload);

  if (payload) {
    yield put(loginSuccess(payload));
    yield put(routerActions.push('/'));
  } else {
    yield put(loginFailure(payload));
  }
}

const loginSaga = [takeEvery('LOGIN_REQUEST', handleRequest)];
export default loginSaga;
