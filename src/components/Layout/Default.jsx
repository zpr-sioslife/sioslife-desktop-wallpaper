import React, { Fragment } from 'react';
import LayoutHeader from './Header';
import LayoutMain from './Main';
import LayoutFooter from './Footer';

const Default = ({ children }) => (
  <Fragment>
    <LayoutHeader />
    <LayoutMain>
      {children}
    </LayoutMain>
    <LayoutFooter />
  </Fragment>
);

export default Default;