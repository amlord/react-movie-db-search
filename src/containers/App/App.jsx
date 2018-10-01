import React, { Component } from 'react';
import Header from 'components/Header';
import SearchResults from 'containers/SearchResults';
import Footer from 'components/Footer';
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
    return (
      <>
        <Header />
        <SearchResults />
        <Footer />
      </>
    );
  }
}

export default App;
