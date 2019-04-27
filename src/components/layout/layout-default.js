import React from 'react';
import LayoutHeader from './layout-header';
import LayoutMain from './layout-main';
import LayoutFooter from './layout-footer';

const LayoutDefault = ({ children }) => (
  <>
    <LayoutHeader />
    <LayoutMain>{children}</LayoutMain>
    <LayoutFooter />
  </>
);

export default LayoutDefault;
