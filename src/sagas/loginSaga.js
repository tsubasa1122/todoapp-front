import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../common/api';
import { loginSuccess, loginFailure } from '../actions';

function* handleRequest(action) {
  let { payload } = action;
  payload = yield call(api, payload);
  console.log(payload);
  // if( ) {
  yield put(loginSuccess(payload));
  // } else {
  //   yield put(loginFailure(payload));
  // }
}

const loginSaga = [takeEvery('LOGIN_REQUEST', handleRequest)];
export default loginSaga;
