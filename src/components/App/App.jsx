import React, { Component } from 'react';
import styled from 'styled-components';
import TheMovieDb from 'api/TheMovieDb';

class App extends Component {
  constructor(props) {
    super(props);

    this.TheMovieDb = new TheMovieDb();

    this.TheMovieDb.getMovies('fight c').then((results) => {
      console.log({ results });
    });
  }

  render() {
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

    return (
      <Wrapper>
        <Title>Base React App!</Title>
      </Wrapper>
    );
  }
}

export default App;
