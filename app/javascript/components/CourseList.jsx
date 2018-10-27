import React, { Component } from 'react';
import propTypes from 'prop-types';

import Course from '../components/Course';

class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="course-list">
        {/* Map courses here */}
      </div>
    );
  }
}
export default CourseList;
