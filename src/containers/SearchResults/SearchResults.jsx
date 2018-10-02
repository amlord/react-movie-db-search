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

const SearchResults = ({
  results, totalResults, page, totalPages, onSearchUpdate,
}) => (
  <StyledMain>
    <Wrapper>
      <SearchBar onSearchUpdate={onSearchUpdate} />
      <SearchResultsOverview totalResults={totalResults} />
      <Pagination page={page} totalPages={totalPages} />
      <SearchResultsList results={results} />
      <Pagination page={page} totalPages={totalPages} />
    </Wrapper>
  </StyledMain>
);

SearchResults.defaultProps = {
  results: [],
  totalResults: 0,
  page: 0,
  totalPages: 0,
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  onSearchUpdate: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

export default SearchResults;
