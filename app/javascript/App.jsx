/**
 * Root Component
 */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { addCourse } from './actions/addCourse';

import routes from './routes/routes';

import SearchBar from './components/SearchBar';
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

  componentDidMount() {
    this.props.addCourse({term: '20191', course: {code: 'CSC171'}});
    console.log(this.props.state);
    if (gon.last_query) {
      this.setState({query: gon.last_query});
      this.queryCourses(gon.last_query);
    }
  }

  render() {
    let searchResult = this.state.error ? null : <CourseList courses={this.state.results} />;

    return (
      <div className="row">
        <div className="col-sm-8">
          <div className="header">
            <span className="homeLabel">Skedge V2</span>
            {/* <SearchBar /> */}
            <input onChange={this.updateQueryValue} value={this.state.query} id="search__input" />
          </div>
          <div id="query-results">
            <span>{this.state.error}</span>
            { searchResult }
          </div>
          <Router>
            { routes }
          </Router>
        </div>

        <div className="col-sm-4">
          <Calendar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { addCourse })(App);
