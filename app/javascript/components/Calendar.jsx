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
      blockArray: []
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
      console.log(section);
      
      let block = {width: '64px', height: section.duration * 100, xOffset: '20px', yOffset: (section.startTime % 1000)};
      let newList = this.state.blockArray;
      newList.push(block);
      this.setState({ blockArray: newList });
    });

    console.log(this.state.blockArray);
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
          <div className="class-block">
            MTH 165<br />
            TH 6-10
          </div>
          10<div className="time-block"></div>
          11<div className="time-block"></div>
          12<div className="time-block"></div>
          1<div className="time-block"></div>
          2<div className="time-block"></div>
          3<div className="time-block"></div>
          4<div className="time-block"></div>
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
