import React, { Component } from 'react';
import propTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let section = this.props.section;

    return (
      <div className="section">
        <div>Time & Place: {section.timeAndPlace}</div>

        <div>
          <span>Instructor: {section.instructors}</span>
          <span>CRN: {section.crn}</span>
        </div>

        <div>
          { section.enrollRatio }
        </div>
      </div>
    );
  }
}

// Props validation
Section.propTypes = {
  section: propTypes.object.isRequired
};

export default Section;
