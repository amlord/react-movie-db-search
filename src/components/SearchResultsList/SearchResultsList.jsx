import React from 'react';
// import styled from 'styled-components';

// const StyledSearchBar = styled.div`
//   background-color: #ececed;
//   color: #333;
// `;

const SearchResultsList = ({ results }) => (
  <>
    {results.map(result => <div key={result.id}>{result.title}</div>)}
  </>
);

export default SearchResultsList;
