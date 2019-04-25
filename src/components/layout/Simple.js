import React from 'react';
import LayoutMain from './Main';

const LayoutSimple = ({ children }) => (
  <>
    <LayoutMain>{children}</LayoutMain>
  </>
);

export default LayoutSimple;
