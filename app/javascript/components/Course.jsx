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
        <span className="course__credit">{course.credits} credits</span>
        <div className="course__title">{course.dept} {course.num}: {course.title}</div>
        <div className="course__prereq">
          Prerequisites: {course.prerequisites}
        </div>
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
