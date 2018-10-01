import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';

const StyledFooter = styled.footer`
  background-color: #081c24;
  color: #fff;
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper>FOOTER</Wrapper>
  </StyledFooter>
);

export default Footer;
