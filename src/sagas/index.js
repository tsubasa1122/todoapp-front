import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as api from '../api/api';

export default function* rootSaga() {
  yield all([fork()]);
}
