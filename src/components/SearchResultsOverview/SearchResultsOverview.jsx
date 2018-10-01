import React from 'react';
import PropTypes from 'prop-types';

const SearchResultsOverview = ({ totalResults }) => (
  <div>
    <span>Total Results: </span>
    <strong>{totalResults}</strong>
  </div>
);

SearchResultsOverview.propTypes = {
  totalResults: PropTypes.number.isRequired,
};

export default SearchResultsOverview;
