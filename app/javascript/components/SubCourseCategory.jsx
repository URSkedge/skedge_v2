// This can be all the lab sections of a course, or
// all the recitations of a course, and etc.
import React, { Component } from 'react';
import propTypes from 'prop-types';
import SubCourseSection from '../components/SubCourseSection';

class SubCourseCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.toggleSectionGroup = this.toggleSectionGroup.bind(this);
  }

  toggleSectionGroup(evt) {
    evt.target.nextSibling.classList.toggle('hidden');
  }

  render() {
    let sectionGroupElements = [];
    let sectionGroups = this.props.sectionGroups
    for (let sectionGroupLabel in sectionGroups) {
      let sectionElements = sectionGroups[sectionGroupLabel].map((section) => {
        return <SubCourseSection key={section.crn} section={section} />
      });

      // This pushes a group of sub course sections in each iteration.
      // Such a group can be 'Lab A', 'Lab B', or simply 'Lab'
      sectionGroupElements.push(
        <div key={`${this.props.title}_${sectionGroupLabel}`} className="subCourseSectionGroup">
          <div className="subCourseCategory__title" onClick={this.toggleSectionGroup}>
            {this.props.title} {sectionGroupLabel} ({sectionElements.length} sections)
          </div>
          <div className="row hidden">
            {sectionElements}
          </div>
        </div>
      );
    }

    return (
      <div className="subCourseCategory">
        {sectionGroupElements.reverse()}
      </div>
    );
  }
}
export default SubCourseCategory;
