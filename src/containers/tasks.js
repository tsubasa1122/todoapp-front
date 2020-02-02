import React from 'react';
import { connect } from 'react-redux';
import { tasksRequest } from '../actions';

import styled from 'styled-components';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTasks();
    console.log(this.props);
  }
  render() {
    return <Section>{console.log(this.props)}</Section>;
  }
}

function mapStateToProps(state) {
  return state.tasks;
}
function mapDispatchToProps(dispatch) {
  return { getTasks: tasks => dispatch(tasksRequest(tasks)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);

const Section = styled.section`
  margin: 0 auto;
  width: 640px;
  padding-top: 180px;
`;
