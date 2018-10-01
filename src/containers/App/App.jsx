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
      console.log({ results });
      this.setState({ ...results });
    });
  }

  render() {
    const { results, total_results: totalResults } = this.state;

    return (
      <>
        <Header />
        <SearchResults results={results} totalResults={totalResults} />
        <Footer />
      </>
    );
  }
}

export default App;
