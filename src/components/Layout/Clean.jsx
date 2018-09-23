import React, { Fragment } from 'react';
import LayoutMain from './Main';

const Clean = ({ children }) => (
  <Fragment>
    <LayoutMain>
      {children}
    </LayoutMain>
  </Fragment>
);

export default Clean;