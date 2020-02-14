import { connect } from 'react-redux';
import { tasksRequest } from '../actions';
import Tasks from '../components/tasks';

function mapStateToProps(state) {
  return state.tasks;
}
function mapDispatchToProps(dispatch) {
  return { getTasks: tasks => dispatch(tasksRequest(tasks)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
