/**
 * Root Component
 */
import React, { Component } from 'react';

import Calendar from './components/Calendar';
import CourseList from './components/CourseList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
      error: '',
    };
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  updateQueryValue(evt) {
    const newVal = evt.target.value;
    this.setState({query: newVal});
    this.queryCourses(newVal);
  }

  queryCourses(query) {
    const url = `${gon.host_url}/api/search?q=${query}`
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

  componentDidMount() {
    if (gon.last_query) {
      this.setState({query: gon.last_query});
      this.queryCourses(gon.last_query);
    }
  }

  render() {
    let searchResult = this.state.error ? null : <CourseList courses={this.state.results} />;

    return (
      <div className="row">
        <div className="col-wrap col-sm-8">
          <div className="header">
            <span className="homeLabel">Skedge V2</span>
            <input onChange={this.updateQueryValue} placeholder="Search..." value={this.state.query} id="search__input" />
          </div>
          <div id="query-results">
            <span id="error">{this.state.error || <span id="term-header">Spring 2019</span>}</span>
            { searchResult }
          </div>
        </div>

        <div className="col-wrap col-sm-4">
          <div id="calendar"></div>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
