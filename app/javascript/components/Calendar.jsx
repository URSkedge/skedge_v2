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
      sectionCnt: 0,
    };

    this.data = {};
  }

  componentDidMount() {
    let me = this;
    let store1 = store;
    store.subscribe(function() {
      me.data = {};
      me.data = store1.getState();
      me.updateEvents();
    });
    this.drawCalendar();
  }

  drawCalendar() {
    $("#calendar").fullCalendar({
      defaultView: 'agendaDay',
      height: 600,
      header: false,
      allDaySlot: false,
      scrollTime: '08:00:00',
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      events: [],
      resources: [
        { id: 'M', title: 'Mon' },
        { id: 'T', title: 'Tu' },
        { id: 'W', title: 'Wed' },
        { id: 'R', title: 'Th' },
        { id: 'F', title: 'Fri' }
      ]
    });
  }

  updateEvents() {
    $("#calendar").fullCalendar('removeEvents');
    let sections = this.data[this.data.term];
    let totalCredit = 0;
    sections.forEach(section => { totalCredit += parseInt(section.course.credits) });
    this.setState({ sectionCnt: sections.length, credits: totalCredit });
    console.log(sections.length);

    sections.forEach(section => {
      let start = section.startTime.toString();
      let end = section.endTime.toString();
      $("#calendar").fullCalendar('renderEvent', {
        id: section.crn,
        title: `${section.course.dept} ${section.course.num}`,
        start: `${start.substring(0,2)}:${start.substring(2)}:00`,
        end: `${end.substring(0,2)}:${end.substring(2)}:00`,
        resourceIds: section.days.split(''),
        backgroundColor: '#e6fffa'
      });
    });
  }

  render() {
    return (
      <div id="calendar-wrap">
        <span><b>{this.state.sectionCnt}</b> sections </span>/
        <span><b> {this.state.credits}</b> credits</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps, {})(Calendar);
