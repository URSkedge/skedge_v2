import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import Social from './Social';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/social" component={Social} />
  </Switch>
);