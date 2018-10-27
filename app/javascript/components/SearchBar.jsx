import React, { Component } from 'react';
import propTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: '',
    };
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  updateQueryValue(evt) {
    console.log(evt);
    
    this.queryCourses(evt.target.value);
  }

  queryCourses(query) {
    const url = `http://localhost:3000/api/search?q=${query}`
    fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      this.setState({ results: data.courseGroups });
      this.setState({ error: data.searchError }); 
    })
  }

  render() {
    return (
      <div id="search-bar">
        <input onChange={this.updateQueryValue} id="search-input" placeholder="query" />
      </div>
    );
  }
}
export default SearchBar;
