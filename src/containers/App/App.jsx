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

  /**
   * Search the movies api
   *
   * @param {String} searchText - text to search for
   * @returns {undefined}
   */
  searchMovies = (searchText) => {
    this.TheMovieDb.getMovies(searchText).then((response) => {
      this.setState({ ...response });
    });
  }

  /**
   * Handle search text change (prevent unnecessary searches)
   *
   * @param {String} searchText - text to search for
   * @returns {undefined}
   */
  handleSearchUpdate = (searchText) => {
    // clear previous timeout
    clearTimeout(this.timeout);

    // prevent search if no search text
    if (searchText.length === 0) {
      this.setState({ results: [], total_results: 0 });
    } else {
      // prevent firing off too many fetches in short succession
      this.timeout = setTimeout(() => {
        this.searchMovies(searchText);
      }, 250);
    }
  }

  render() {
    const { results, total_results: totalResults } = this.state;

    return (
      <>
        <Header />
        <SearchResults
          results={results}
          totalResults={totalResults}
          onSearchUpdate={this.handleSearchUpdate}
        />
        <Footer />
      </>
    );
  }
}

export default App;
