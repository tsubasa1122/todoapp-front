import React from 'react';
import styled from 'styled-components';

class FormTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Div>
        <H2>ログイン</H2>
      </Div>
    );
  }
}

export default FormTitle;

const Div = styled.div`
  background-color: #202437;
  border-radius: 10px 10px 0 0 / 10px 10px 0 0;
  -webkit-border-radius: 10px 10px 0 0 / 10px 10px 0 0;
  -moz-border-radius: 10px 10px 0 0 / 10px 10px 0 0;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 16px;
  color: #d2d3d7;
  padding: 20px 0;
`;
