import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import tasks from './tasks';
import createTask from './create_task';

const reducer = combineReducers({
  login,
  tasks,
  createTask,
  routing: routerReducer,
});

export default reducer;
