import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';

const StyledFooter = styled.footer`
  background-color: #081c24;
  color: #fff;
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper><small>By Andrew Lord &copy; 2018</small></Wrapper>
  </StyledFooter>
);

export default Footer;
