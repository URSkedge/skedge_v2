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
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: section.enrollBarPercentage + '%'}}></div>
            {section.enrollRatio + ' enrolled'}
          </div>
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
