import React, { Component } from 'react';
import propTypes from 'prop-types';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Course</h1>
      </div>
    );
  }
}

// Props validation
Course.propTypes = {
  code: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  professor: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
};

export default Course;
