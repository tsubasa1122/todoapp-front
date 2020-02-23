import { connect } from 'react-redux';
import NewTask from '../components/new_task';
import { createTaskRequest } from '../actions';

function mapStateToProps(state) {
  return state.createTask;
}
const mapDispatchToProps = dispatch => ({
  dispatchTaskRequest: taskForm => dispatch(createTaskRequest(taskForm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
