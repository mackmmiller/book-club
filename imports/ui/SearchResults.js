import React, { Component } from 'react';

class SearchResults extends Component {
  state = {
    results: [],
  };

  render() {
    return (
      <div>
        <h2>
          Showing Results For: <em>{this.props.match.params.search}</em>
        </h2>
      </div>
    );
  }
}

export default SearchResults;
