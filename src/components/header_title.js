import React from 'react';
import styled from 'styled-components';

const HeaderTitle = ({ title }) => {
  return (
    <div>
      <H2>{title}</H2>
    </div>
  );
};

export default HeaderTitle;

const H2 = styled.h2`
  color: #cbccd1;
  font-size: 24px;
  padding-top: 30px;
  padding-bottom: 18px;
  border-bottom: 1px solid #cbccd1;
`;
