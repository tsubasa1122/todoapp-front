import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import styled from 'styled-components';

class NewTask extends React.Component {
  render() {
    return <Section></Section>;
  }
}

function mapStateToProps(state) {
  return state.login;
}
function mapDispatchToProps(dispatch) {
  return { dispatchRequest: loginForm => dispatch(loginRequest(loginForm)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

const Section = styled.section`
  margin: 0 auto;
  width: 640px;
  padding-top: 180px;
`;
