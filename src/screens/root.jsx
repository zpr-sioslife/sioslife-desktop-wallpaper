import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { LayoutDefault, LayoutClean } from '../components/Layout';

import ScreensHome from './Home';
import ScreensOptions from './Options';
import ScreensAbout from './About';

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const ScreensRoot = () => (
  <Router>
    <Fragment>
      <Switch>
        <LayoutRoute path="/" exact  component={ScreensHome}     layout={LayoutDefault} />
        <LayoutRoute path="/options" component={ScreensOptions}  layout={LayoutDefault} />
        <LayoutRoute path="/about"   component={ScreensAbout}    layout={LayoutClean} />
      </Switch>
    </Fragment>
  </Router>
);

export default ScreensRoot;