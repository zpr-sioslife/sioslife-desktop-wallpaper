import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensDownload from './download';
import ScreensOptions from './options';

const ScreensRoot = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ScreensDownload} />
      <Route path="/options" component={ScreensOptions} />
    </Switch>
  </Router>
);

export default ScreensRoot;