import React from 'react';
import styled from 'styled-components';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    return <Container></Container>;
  }
}

export default Tasks;

const Container = styled.section`
  margin: 0 auto;
  width: 80%;
  padding-top: 180px;
`;
