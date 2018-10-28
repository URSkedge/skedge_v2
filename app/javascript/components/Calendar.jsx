import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import $ from 'jquery';
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
      me.updateStates();
    });

    $("#calendar").fullCalendar({
      defaultView: 'agendaDay',
      height: 600,
      header: false,
      allDaySlot: false,
      scrollTime: '08:00:00',
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      events: [
        {title: 'course 1', start: '12:00:00', end: '14:00:00', resourceIds: ['M', 'W'], backgroundColor: '#e6fffa'},
        {title: 'course 2', start: '14:10:00', end: '16:00:00', resourceIds: ['T', 'R'], backgroundColor: '#e6fffa'}
      ],
      resources: [
        { id: 'M', title: 'Mon' },
        { id: 'T', title: 'Tu' },
        { id: 'W', title: 'Wed' },
        { id: 'R', title: 'Th' },
        { id: 'F', title: 'Fri' }
      ]
    });
  }

  updateStates() {
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
  }


  // drawCourses() {
  //   let courses = this.data[this.data.term];
  //   this.setState({ credits: 0 });
  //   this.setState({ sections: 0 });
  //   courses.forEach(section => {
  //     this.setState({ sections: ++this.state.sections });
  //     this.setState({ credits:  this.state.credits + parseInt(section.course.credits) });
  //     console.log(section);

  //     let block = {width: '64px', height: section.duration * 100, xOffset: '20px', yOffset: (section.startTime % 1000)};
  //     let newList = this.state.blockArray;
  //     newList.push(block);
  //     this.setState({ blockArray: newList });
  //   });

  //   console.log(this.state.blockArray);
  // }

  render() {
    return (
      <div id="calendar-wrap">
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
