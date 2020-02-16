import React from 'react';
import styled from 'styled-components';
import HeaderTitle from './header_title';

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskForm: {
        title: '',
        content: '',
        expires_at: '',
        tag: [],
      },
    };
  }

  render() {
    return (
      <Container>
        <HeaderTitle title={'タスクの登録'} />
      </Container>
    );
  }
}

export default NewTask;

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`;
