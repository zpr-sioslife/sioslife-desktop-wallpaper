import React from 'react';
import { Link } from 'react-router-dom';

const pkg = require('../../../../package.json');

const Header = () => (
  <footer className="has-background-light" style={{ padding: '8px' }}>
    <div className="is-pulled-left">
      <b>
        {pkg.name} - {pkg.version}
      </b>
    </div>
    <span className="is-pulled-right">
      <Link to="/about">About</Link>
    </span>
  </footer>
);

export default Header;
