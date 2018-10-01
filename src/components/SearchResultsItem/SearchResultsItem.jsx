import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSearchResultsListItem = styled.li`
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 1px 6px 1px rgba(0,0,0,0.14);
  background-color: #fff;
`;

const SearchResultsListItem = ({ title }) => (
  <StyledSearchResultsListItem>{title}</StyledSearchResultsListItem>
);

SearchResultsListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchResultsListItem;
