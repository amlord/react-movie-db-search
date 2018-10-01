import React, { Component } from 'react';
import Header from 'components/Header';
import SearchResults from 'containers/SearchResults';
import Footer from 'components/Footer';
import TheMovieDb from 'api/TheMovieDb';

class App extends Component {
  constructor(props) {
    super(props);

    this.TheMovieDb = new TheMovieDb();

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.TheMovieDb.getMovies('fight c').then((results) => {
      this.setState({ ...results });
    });
  }

  render() {
    const { results } = this.state;
    console.log({ results });
    return (
      <>
        <Header />
        <SearchResults results={results} />
        <Footer />
      </>
    );
  }
}

export default App;
