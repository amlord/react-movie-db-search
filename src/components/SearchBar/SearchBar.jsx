import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  background-color: #01d277;
  color: #333;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 120px auto;
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

const SearchBar = ({ onSearchUpdate }) => (
  <StyledSearchBar>
    <StyledLabel htmlFor="search">Search Movies:</StyledLabel>
    <StyledInput
      type="search"
      id="search"
      onChange={event => onSearchUpdate(event.target.value)}
    />
  </StyledSearchBar>
);

SearchBar.propTypes = {
  onSearchUpdate: PropTypes.func.isRequired,
};

export default SearchBar;
