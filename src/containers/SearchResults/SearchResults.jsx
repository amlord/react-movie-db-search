import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from 'components/Wrapper';
import SearchBar from 'components/SearchBar';
import SearchResultsOverview from 'components/SearchResultsOverview';
import SearchResultsList from 'components/SearchResultsList';
import Pagination from 'components/Pagination';

const StyledMain = styled.main`
  background-color: #fff;
  color: #333;
`;

const SearchResults = ({ results, totalResults, onSearchUpdate }) => (
  <StyledMain>
    <Wrapper>
      <SearchBar onSearchUpdate={onSearchUpdate} />
      <SearchResultsOverview totalResults={totalResults} />
      <Pagination />
      <SearchResultsList results={results} />
      <Pagination />
    </Wrapper>
  </StyledMain>
);

SearchResults.defaultProps = {
  results: [],
  totalResults: 0,
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  onSearchUpdate: PropTypes.func.isRequired,
};

export default SearchResults;
