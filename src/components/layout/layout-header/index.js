import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const LayoutHeader = () => (
  <header>
    <nav className="tabs is-toggle is-fullwidth is-large">
      <NavLink to="/wallapers" activeClassName="is-active">
        Wallpapers
      </NavLink>

      <NavLink to="/download" activeClassName="is-active">
        Download
      </NavLink>

      <NavLink to="/options" activeClassName="is-active">
        Options
      </NavLink>
    </nav>
  </header>
);

export default LayoutHeader;
