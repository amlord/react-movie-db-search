import React from 'react';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';

const StyledHeader = styled.header`
  background-color: #081c24;
  color: #fff;
`;

const StyledH1 = styled.h1`
  margin: 7px 0 0;
`;

const StyledImg = styled.img`
  height: 72px;
  vertical-align: top;
`;

const StyledTitleContainer = styled.div`
  height: 72px;
  display: inline-block;
  vertical-align: top;
  padding-left: 20px;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <StyledImg src="https://www.themoviedb.org/assets/1/v4/logos/powered-by-square-green-11c0c7f8e03c4f44aa54d5e91d9531aa9860a9161c49f5fa741b730c5b21a1f2.svg" alt="The Movie DB logo" />
      <StyledTitleContainer>
        <StyledH1>The Movie DB</StyledH1>
        <small>Discover Movies, TV Shows &amp; People</small>
      </StyledTitleContainer>
    </Wrapper>
  </StyledHeader>
);

export default Header;
