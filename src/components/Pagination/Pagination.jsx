import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPaginationContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Pagination = ({ page, totalPages }) => {
  const paginationText = `[PAGINATION: Page ${page} of ${totalPages}]`;

  return (
    <StyledPaginationContainer>{paginationText}</StyledPaginationContainer>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
