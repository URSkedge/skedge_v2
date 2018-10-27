import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { store } from '../store';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: 0,
      sections: 0,
    };

    this.data = {};
  }

  componentDidMount() {
    let me = this;    
    let store1 = store;
    store.subscribe(function() {
      me.data = {};
      me.data = store1.getState();
      me.drawCourses();
    });
  }

  drawCourses() {
    let courses = this.data[this.data.term];
    this.setState({ credits: 0 });
    this.setState({ sections: 0 });
    courses.forEach(section => {
      this.setState({ sections: ++this.state.sections });
      this.setState({ credits:  this.state.credits + parseInt(section.course.credits) });
    });
  }

  render() {
    return (
      <div id="calendar-wrap">
        <h1>Calendar</h1>
        <table>
          <tbody>
            <tr>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>R</th>
              <th>F</th>
            </tr>
          </tbody>
        </table>

        <div id="cal-content">
          10<div className="cal-block"></div>
          11<div className="cal-block"></div>
          12<div className="cal-block"></div>
          1<div className="cal-block"></div>
          2<div className="cal-block"></div>
          3<div className="cal-block"></div>
          4<div className="cal-block"></div>
        </div>
        <span><b>{this.state.sections}</b> sections </span>/
        <span><b> {this.state.credits}</b> credits</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps, {})(Calendar);
