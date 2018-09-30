import React from 'react';
import styled from 'styled-components';
import theMovieDb from 'api/theMovieDb';

const App = () => {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  theMovieDb.getMovies('fight c');

  return (
    <Wrapper>
      <Title>Base React App!</Title>
    </Wrapper>
  );
};

export default App;
