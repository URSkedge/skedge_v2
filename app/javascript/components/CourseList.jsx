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
        {this.props.courses.map(course => (
          <Course
            key={course.id}
            course={course}
          />
        ))}
      </div>
    );
  }
}
export default CourseList;
