import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeaderTitle from './header_title';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    const { tasks, dispatchTaskFinishRequest } = this.props;
    return (
      <Container>
        <HeaderTitle title={'タスク一覧'} />
        <NavContainer>
          <NewTaskButton to="/tasks/new">タスクの登録</NewTaskButton>
        </NavContainer>
        <TaskContainer>
          {tasks.map(task => (
            <TaskBox key={task.id}>
              <TaskBoxContent>
                <TaskTitle>{task.title}</TaskTitle>
                <TaskContent>{task.content}</TaskContent>
                <TaskExpires>{task.expires_at}</TaskExpires>
                <TaskCompleteButton onClick={() => dispatchTaskFinishRequest(task.id)}>完了</TaskCompleteButton>
              </TaskBoxContent>
            </TaskBox>
          ))}
        </TaskContainer>
      </Container>
    );
  }
}

export default Tasks;

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`;

const NavContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const NewTaskButton = styled(Link)`
  float: right;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  padding: 12px 30px;
  background-color: #57ba8a;
  border-radius: 35px;
  text-decoration: none;
`;

const TaskContainer = styled.div`
  margin-top: 80px;
`;

const TaskBox = styled.div`
  width: 30%;
  background-color: #323849;
`;

const TaskBoxContent = styled.div`
  padding: 36px 10px 10px 18px;
`;

const TaskTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #d6d7db;
`;

const TaskContent = styled.p`
  font-size: 14px;
  color: #999ca4;
`;

const TaskExpires = styled.span`
  font-size: 14px;
  color: #999ca4;
`;

const TaskCompleteButton = styled.button`
  float: right;
  font-size: 8px;
  color: #000000;
  font-weight: bold;
  padding: 6px 18px;
  background-color: #57ba8a;
  border-radius: 35px;
`;
