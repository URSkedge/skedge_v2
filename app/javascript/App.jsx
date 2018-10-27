/**
 * Root Component
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';

import SearchBar from './components/SearchBar';
import Calendar from './components/Calendar';

export default function App() {
  return (
    <div id="root">
      <div className="left">
        <div className="header">
          <h1>skedge v2</h1>
          <SearchBar />
        </div>
        <Router>
          { routes }
        </Router>
      </div>

      <div className="right">
        <Calendar />
      </div>
    </div>
  );
}
