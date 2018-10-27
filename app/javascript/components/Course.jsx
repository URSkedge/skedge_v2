import React, { Component } from 'react';
import propTypes from 'prop-types';

import Section from '../components/Section';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let course = this.props.course;

    let sections;
    if (course.sections) {
      sections = course.sections.map(section => (
        <Section
          key={section.id}
          section={section}
        />
      ));
    }

    return (
      <div className="course">
        <span>{course.dept} {course.num}: {course.title}</span>
        <div>{course.description}</div>
        { sections }
      </div>
    );
  }
}

// Props validation
Course.propTypes = {
  course: propTypes.object.isRequired
};

export default Course;
