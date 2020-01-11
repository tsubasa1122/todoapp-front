import React, { Component } from 'react';

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
      <form>
        <div>
          <div>
            <input
              type="email"
              name="login-email"
              placeholder="メールアドレス"
              value={this.state.loginForm.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="login-password"
              placeholder="パスワード"
              value={this.state.loginForm.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="button" disabled={false} onClick={e => dispatchRequest(this.state.loginForm)}>
              ログイン
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginForm;
