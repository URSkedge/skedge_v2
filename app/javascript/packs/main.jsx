// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';

import 'fullcalendar';
import 'fullcalendar-scheduler';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';

import { Provider } from 'react-redux'
import { store } from '../store';

import App from '../App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root.appendChild(document.createElement('div')),
  )
})
