import { createAction } from 'redux-actions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export const TASKS_REQUEST = 'TASKS_REQUEST';
export const GET_TASKS = 'GET_TASKS';
export const FAIL_TASKS = 'FAIL_TASKS';
export const tasksRequest = createAction(TASKS_REQUEST);
export const getTasks = createAction(GET_TASKS);
export const failTasks = createAction(FAIL_TASKS);
