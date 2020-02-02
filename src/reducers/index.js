import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import tasks from './tasks';

const reducer = combineReducers({
  login,
  tasks,
  routing: routerReducer,
});

export default reducer;
