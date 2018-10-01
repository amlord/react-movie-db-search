import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsItem from 'components/SearchResultsItem';
import styled from 'styled-components';

const StyledSearchResultsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SearchResultsList = ({ results }) => (
  <StyledSearchResultsList>
    {results.map(result => <SearchResultsItem key={result.id} title={result.title} />)}
  </StyledSearchResultsList>
);

SearchResultsList.defaultProps = {
  results: [],
};

SearchResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResultsList;
