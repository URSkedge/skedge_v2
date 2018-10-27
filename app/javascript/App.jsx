/**
 * Root Component
 */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';

import SearchBar from './components/SearchBar';
import Calendar from './components/Calendar';
import CourseList from './components/CourseList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      error: '',
    };
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  updateQueryValue(evt) {
    this.queryCourses(evt.target.value);
  }

  queryCourses(query) {
    // if (query.length < 3){
    //   return;
    // }
    const url = `http://localhost:3000/api/search?q=${query}`
    fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      if (data.courseGroups[0] == null) {
        this.setState({ results: [] });
        this.setState({ error: data.searchError });
        return;
      }
      this.setState({ results: data.courseGroups[0] });
      this.setState({ error: data.searchError });
    })
  }

  render() {
    let searchResult = this.state.error ? null : <CourseList courses={this.state.results} />;

    return (
      <div id="root">
        <div className="left">
          <div className="header">
            <h1>skedge v2</h1>
            {/* <SearchBar /> */}
            <input onChange={this.updateQueryValue} id="search-input" placeholder="query" />
          </div>
          <div id="query-results">
            <span>{this.state.error}</span>
            { searchResult }
          </div>
          <Router>
            { routes }
          </Router>
        </div>

        <div className="right">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
