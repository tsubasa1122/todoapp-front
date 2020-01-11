import React, { Component } from 'react';
import styled from 'styled-components';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        email: '',
        password: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let loginForm = this.state.loginForm;
    switch (event.target.name) {
      case 'login-email':
        loginForm.email = event.target.value;
        break;
      case 'login-password':
        loginForm.password = event.target.value;
        break;
      default:
        break;
    }

    this.setState({
      loginForm: loginForm,
    });
  }

  componentDidMount() {
    let loginForm = this.state.loginForm;
    this.setState({
      loginForm: loginForm,
    });
  }

  render() {
    const { dispatchRequest } = this.props;
    return (
      <Form>
        <div>
          <FormInner>
            <Fieldset>
              <Label>メールアドレス</Label>
              <Input
                type="email"
                name="login-email"
                placeholder="example.com"
                value={this.state.loginForm.email}
                onChange={this.handleChange}
              />
            </Fieldset>
            <Fieldset>
              <Label>パスワード</Label>
              <Input
                type="password"
                name="login-password"
                placeholder="password"
                value={this.state.loginForm.password}
                onChange={this.handleChange}
              />
            </Fieldset>
          </FormInner>
          <ButtonInner>
            <Link>パスワードを忘れた方はこちら</Link>
            <Button type="button" disabled={false} onClick={e => dispatchRequest(this.state.loginForm)}>
              ログイン
            </Button>
          </ButtonInner>
          <SignupInner>
            <Link>新規会員登録はこちら</Link>
          </SignupInner>
        </div>
      </Form>
    );
  }
}

export default LoginForm;

const Form = styled.form`
  background-color: #323849;
  width: 100%;
  border-radius: 0 0 10px 10px / 0 0 10px 10px;
  -webkit-border-radius: 0 0 10px 10px / 0 0 10px 10px;
  -moz-border-radius: 0 0 10px 10px / 0 0 10px 10px;
`;

const FormInner = styled.div`
  flex-direction: column;
  display: flex;
  padding: 30px 30px 5px;
  border-radius: 10px;
`;

const Fieldset = styled.fieldset`
  padding: 0 0 20px 0;
  border: none;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 13px;
  color: #999ca4;
  width: 30%;
  line-height: 36px;
`;
const Input = styled.input`
  display: inline-block;
  font-size: 13px;
  width: 66%;
  padding: 10px;
  background-color: #262c3f;
  border-radius: 4px;
`;

const ButtonInner = styled.div`
  padding: 10px 30px 10px;
  text-align: right;
`;

const Link = styled.a`
  font-size: 12px;
  padding: 10px 20px;
  margin: 0 5px;
  line-height: 1;
  color: #999ca4;
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

const SignupInner = styled.div`
  padding: 10px 0 15px;
`;
