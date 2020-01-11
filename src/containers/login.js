import React from 'react';
// import SectionTitle from '../components/section-title';
import { connect } from 'react-redux';
import LoginForm from '../components/login-form';
import { loginRequest } from '../actions';

class Login extends React.Component {
  render() {
    return (
      <section>
        {/* <SectionTitle title="ログイン" /> */}
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
