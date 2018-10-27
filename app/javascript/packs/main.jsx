// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { updateState } from '../reducers/updateState';

import App from '../App';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = createStore(updateState);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root.appendChild(document.createElement('div')),
  )
})
