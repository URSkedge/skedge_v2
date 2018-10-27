import React, { Component } from 'react';
import propTypes from 'prop-types';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="course">
        <span>{this.props.code}</span><br />
        <span>{this.props.name}</span><br />
      </div>
    );
  }
}

// Props validation
Course.propTypes = {
  code: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default Course;
