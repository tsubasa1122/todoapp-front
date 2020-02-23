import { connect } from 'react-redux';
import { tasksRequest, finishTaskRequest } from '../actions';
import Tasks from '../components/tasks';

function mapStateToProps(state) {
  return state.tasks;
}
const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(tasksRequest()),
  dispatchTaskFinishRequest: task_id => dispatch(finishTaskRequest(task_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
