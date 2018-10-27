// This is a sub course section.
// Such a section can be a lab section, a recitation section,
// a workshop section, and etc.
import React, { Component } from 'react';
import propTypes from 'prop-types';

class SubCourseSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let section = this.props.section;
    return (
      <div className="col-sm-6">
        <div>{section.timeAndPlace}</div>
        <div>
          <span>{section.enrollRatio} enrolled</span>
          <span> CRN: {section.crn}</span>
        </div>
      </div>
    );
  }
}

export default SubCourseSection;
