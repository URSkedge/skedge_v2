import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/addCourse';
import { removeCourse } from '../actions/removeCourse';
import propTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      remove: false,
    };

    this.addCourse = this.addCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

  componentDidMount() {
    let term = this.props.section.course.yrTerm;
    if (this.props.state[term]) {
      this.props.state[term].forEach((section) => {
        if (section.crn == this.props.section.crn) {
          this.setState({ remove: true });
        }
      });
    }
  }

  addCourse() {
    let term = this.props.section.course.yrTerm;
    this.props.addCourse({ term, course: this.props.section });
    console.log(this.props.state);
    this.setState({ remove: true });
  }

  removeCourse() {
    let term = this.props.section.course.yrTerm;
    this.props.removeCourse({ term, course: this.props.section.course });
    console.log(this.props.state);
    this.setState({ remove: false });
  }

  render() {
    let section = this.props.section;
    let button = !this.state.remove ?
      <button id="add-course" onClick={this.addCourse}>Add</button> :
      <button id="remove-course" onClick={this.removeCourse}>Remove</button>;
    return (
      <div className="section">
        {button}
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
