import React, { Component } from 'react';
import propTypes from 'prop-types';
import SubCourseCategory from '../components/SubCourseCategory';
import Section from '../components/Section';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let course = this.props.course;

    let sectionElement;
    if (course.sections) {
      sectionElement = course.sections.map(section => (
        <Section
          key={section.id}
          section={section}
        />
      ));
    }

    let subcourses = {
      "Labs": course.subcourses.lab,
      "Workshops": course.subcourses.workshop,
      "Recitations": course.subcourses.recitation,
      "Lab Lectures": course.subcourses.labLecture
    };

    let subElements = [];
    for (let title in subcourses) {
      if (subcourses[title] && Object.values(subcourses[title]).length > 0) {
        subElements.push(
          <SubCourseCategory key={title} title={title} sectionGroups={subcourses[title]} />
        )
      }
    }

    return (
      <div className="course">
        <span className="course__credit">{course.credits} credits</span>
        <div className="course__title">{course.dept} <b>{course.num}</b>: {course.title}</div>
        <div className="course__prereq">
          <b>Comments:</b> {course.comments || 'None'}
        </div>
        <div className="course__prereq">
          <b>Prerequisites:</b> {course.prerequisites || 'None'}
        </div>
        <div>{course.description}</div>
        { sectionElement }
        { subElements }
      </div>
    );
  }
}

// Props validation
Course.propTypes = {
  course: propTypes.object.isRequired
};

export default Course;
