import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Form>
          <Fieldset>
            <Label>タイトル</Label>
            <InputTitle
              type="text"
              name="task[title]"
              placeholder="本日のコミット"
              value={this.state.taskForm.title}
              onChange={this.handleChange}
            />
          </Fieldset>
          <Fieldset>
            <Label>内容</Label>
            <InputContent
              name="task[content]"
              placeholder="本日のコミット内容"
              value={this.state.taskForm.content}
              onChange={this.handleChange}
            />
          </Fieldset>
          <Fieldset>
            <Label>期日</Label>
            <InputExpires
              type="date"
              name="task[expires_at]"
              placeholder="2020/2/14"
              value={this.state.taskForm.expires_at}
              onChange={this.handleChange}
            />
          </Fieldset>
          <Fieldset>
            <Label>タグ</Label>
            <InputTag
              type="text"
              name="task[title]"
              placeholder="Ruby"
              value={this.state.taskForm.tag}
              onChange={this.handleChange}
            />
          </Fieldset>
          <ButtonInner>
            <BackTaskList to="/">タスク一覧へ戻る</BackTaskList>
            <Button type="button" disabled={false}>
              登録
            </Button>
          </ButtonInner>
        </Form>
      </Container>
    );
  }
}

export default NewTask;

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`;

const Form = styled.form`
  width: 80%;
  margin-top: 40px;
`;

const Fieldset = styled.fieldset`
  display: block;
  margin-bottom: 20px;
  border: none;
`;

const Label = styled.label`
  font-size: 14px;
  color: #999ca4;
  font-weight: 500;
  vertical-align: top;
`;

const InputTitle = styled.input`
  background-color: #323849;
  border-radius: 4px;
  margin-left: 112px;
  width: 403px;
  height: 33px;
  ::placeholder {
    padding-left: 5px;
  }
`;

const InputContent = styled.textarea`
  background-color: #323849;
  margin-left: 140px;
  width: 670px;
  height: 186px;
  ::placeholder {
    padding-left: 5px;
  }
`;

const InputExpires = styled(InputTitle)`
  margin-left: 140px;
  width: 151px;
`;

const InputTag = styled(InputTitle)`
  margin-left: 137px;
  width: 131px;
`;

const ButtonInner = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-left: 40px;
`;

const BackTaskList = styled(Link)`
  color: #686c79;
  font-size: 12px;
  line-height: 12px;
  text-decoration: none;
  margin-top: 8px;
`;

const Button = styled.button`
  background-color: #13bd86;
  color: #1f2438;
  border: 1px #13bd86 solid;
  padding: 10px 40px;
  border-radius: 100px;
  font-weight: bold;
  margin: 0 5px;
  font-size: 12px;
  line-height: 1;
`;
