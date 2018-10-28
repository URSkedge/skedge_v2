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
    this.setState({ remove: true });    
  }

  removeCourse() {
    let term = this.props.section.course.yrTerm;
    this.props.removeCourse({ term, course: this.props.section });
    this.setState({ remove: false });
  }

  render() {
    let section = this.props.section;
    let button = this.state.remove ?
      <button className="btn btn-outline-danger" onClick={this.removeCourse}>Remove Section</button> :
      <button className="btn btn-outline-primary" onClick={this.addCourse}>Add Section</button>
    return (
      <div className="section">
        <div id="section__addBtn">{button}</div>
        <div className="section__info">
          <div><b>Time & Place:</b> {section.timeAndPlace}</div>

          <div>
            <span><b>Instructor:</b> {section.instructors}</span>
            <span className="section__crn"><b>CRN:</b> {section.crn}</span>
          </div>

          <div>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{width: section.enrollBarPercentage + '%'}} />
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
