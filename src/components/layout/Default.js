import React from 'react';
import LayoutHeader from './Header';
import LayoutMain from './Main';
import LayoutFooter from './Footer';

const LayoutDefault = ({ children }) => (
  <>
    <LayoutHeader />
    <LayoutMain>{children}</LayoutMain>
    <LayoutFooter />
  </>
);

export default LayoutDefault;
