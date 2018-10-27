import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/addCourse';
import { removeCourse } from '../actions/removeCourse';
import propTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.addCourse = this.addCourse.bind(this);
  }

  addCourse() {
    console.log(this.props.section);
    
    let term = this.props.section.course.yrTerm;
    // this.props.addCourse({ term,  });
  }

  render() {
    let section = this.props.section;

    return (
      <div className="section">
        <button onClick={this.addCourse}>Add</button>
        <div>Time & Place: {section.timeAndPlace}</div>

        <div>
          <span>Instructor: {section.instructors}</span>
          <span>CRN: {section.crn}</span>
        </div>

        <div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: section.enrollBarPercentage + '%'}}>
              {section.enrollRatio}
            </div>
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

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { addCourse, removeCourse })(Section);
