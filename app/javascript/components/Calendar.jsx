import React, { Component } from 'react';
import propTypes from 'prop-types';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credits: 0,
      sections: 0,
      courses: Array,
    };
  }

  calculateOffset() {

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
export default Calendar;
