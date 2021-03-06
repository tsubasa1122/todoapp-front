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

export const FINISH_TASK_REQUEST = 'FINISH_TASK_REQUEST';
export const FINISH_TASK_SUCCESS = 'FINISH_TASK_SUCCESS';
export const FINISH_TASK_FAILURE = 'FINISH_TASK_FAILURE';
export const finishTaskRequest = createAction(FINISH_TASK_REQUEST);
export const finishTaskSuccess = createAction(FINISH_TASK_SUCCESS);
export const finishTaskFailure = createAction(FINISH_TASK_FAILURE);

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
export const createTaskRequest = createAction(CREATE_TASK_REQUEST);
export const createTaskSuccess = createAction(CREATE_TASK_SUCCESS);
export const createTaskFailure = createAction(CREATE_TASK_FAILURE);
