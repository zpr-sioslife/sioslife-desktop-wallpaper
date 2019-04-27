import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LayoutDefault, LayoutSimple } from 'components';
import PageDownload from 'pages/page-download';
import PageOptions from 'pages/page-options';
import PageAbout from 'pages/page-about';
import PageWallpapers from 'pages/page-wallpapers';

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Navigation = () => (
  <Router>
    <Switch>
      <LayoutRoute path="/wallapers" component={PageWallpapers} layout={LayoutDefault} />
      <LayoutRoute path="/download" exact component={PageDownload} layout={LayoutDefault} />
      <LayoutRoute path="/options" component={PageOptions} layout={LayoutDefault} />
      <LayoutRoute path="/about" component={PageAbout} layout={LayoutSimple} />
      <Redirect path="/" to="/download" />
    </Switch>
  </Router>
);

export default Navigation;
