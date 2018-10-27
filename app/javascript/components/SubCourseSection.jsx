// This is a sub course section.
// Such a section can be a lab section, a recitation section,
// a workshop section, and etc.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../actions/addCourse';
import { removeCourse } from '../actions/removeCourse';
import propTypes from 'prop-types';

class SubCourseSection extends Component {
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
      <button className="btn btn-outline-primary btn-sm btn-block" onClick={this.addCourse}>Add</button> :
      <button className="btn btn-outline-danger btn-sm btn-block" onClick={this.removeCourse}>Remove</button>;
    return (
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-2" style={{paddingRight: '0px'}}>{button}</div>
          <div className="col-sm-10">
            <div>{section.timeAndPlace}</div>
            <div>
              <span>{section.enrollRatio} enrolled</span>
              <span className="subCourseSection__crn">
                <b>CRN:</b> {section.crn}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, { addCourse, removeCourse })(SubCourseSection);
