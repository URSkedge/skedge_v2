import React, { Component } from 'react';
import propTypes from 'prop-types';

class SubCourseGroup extends Component {
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
export default SubCourseGroup;
