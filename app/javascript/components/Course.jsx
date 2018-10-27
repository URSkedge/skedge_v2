import React, { Component } from 'react';
import propTypes from 'prop-types';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let course = this.props.course;


    return (
      <div className="course">
        <span>{course.dept} {course.num}: {course.title}</span>
        <div>{course.description}</div>
      </div>
    );
  }
}

// Props validation
Course.propTypes = {
  course: propTypes.object.isRequired
};

export default Course;
