import React, { Component } from 'react';
import propTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  componentDidMount() {
    this.queryCourses();
  }

  queryCourses(query) {
    const url = `http://localhost:3000/api/search?q=${query}`
    fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data); 
    })
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
