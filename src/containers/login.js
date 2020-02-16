import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/login_form';
import FormTitle from '../components/form_title';
import { loginRequest } from '../actions';

import styled from 'styled-components';

class Login extends React.Component {
  render() {
    return (
      <Section>
        <FormTitle />
        <LoginForm dispatchRequest={this.props.dispatchRequest} />
      </Section>
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

const Section = styled.section`
  margin: 0 auto;
  width: 640px;
  padding-top: 180px;
`;
