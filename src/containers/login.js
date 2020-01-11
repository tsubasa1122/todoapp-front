import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/login-form';
import { loginRequest } from '../actions';

class Login extends React.Component {
  render() {
    return (
      <section>
        <LoginForm dispatchRequest={this.props.dispatchRequest} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state.login;
}
function mapDispatchToProps(dispatch) {
  return { dispatchRequest: loginForm => dispatch(loginRequest(loginForm)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
