import React from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  background-color: #01d277;
  color: #333;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 70px auto;
`;

const StyledLabel = styled.label`
  font-size: 1em;
  line-height: 25px;
  padding-left: 5px;
`;

const StyledInput = styled.input`
  border-radius: 2px;
  font-size: 1em;
  line-height: 25px;
  border: none;
  padding: 0 5px;
`;

const SearchBar = () => (
  <StyledSearchBar>
    <StyledLabel htmlFor="search">Search:</StyledLabel>
    <StyledInput type="search" id="search" />
  </StyledSearchBar>
);

export default SearchBar;
