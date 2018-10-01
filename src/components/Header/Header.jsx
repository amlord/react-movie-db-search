import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';

const StyledHeader = styled.header`
  background-color: #081c24;
  color: #fff;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>HEADER</Wrapper>
  </StyledHeader>
);

export default Header;
