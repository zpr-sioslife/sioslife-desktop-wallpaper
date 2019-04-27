import React from 'react';
import LayoutMain from './layout-main';

const LayoutSimple = ({ children }) => (
  <>
    <LayoutMain>{children}</LayoutMain>
  </>
);

export default LayoutSimple;
