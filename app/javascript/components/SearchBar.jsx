import React, { Component } from 'react';
import propTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  queryCourses(query) {
    
  }

  render() {
    return (
      <div id="search-bar">
        <input id="search-input" placeholder="query" />
      </div>
    );
  }
}
export default SearchBar;
