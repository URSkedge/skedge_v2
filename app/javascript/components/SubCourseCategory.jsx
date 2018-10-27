// This can be all the lab sections of a course, or
// all the recitations of a course, and etc.
import React, { Component } from 'react';
import propTypes from 'prop-types';

class SubCourseCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let sectionGroupElements = [];
    let sectionGroups = this.props.sectionGroups
    for (let groupTitle in sectionGroups) {
      let sectionElements = sectionGroups[groupTitle].map((section) => {
        return (<span>{section.crn} || </span>)
      });
      sectionGroupElements.push(
        <div>
          <p>{groupTitle}</p>
          {sectionElements}
        </div>
      );
    }

    return (
      <div>
        <div>{this.props.title}</div>
        {sectionGroupElements}
      </div>
    );
  }
}
export default SubCourseCategory;
