import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header>
    <div className="tabs is-toggle is-fullwidth is-large">
      <ul>
        <li>
          <NavLink to="/wallapers" activeClassName="is-active">
            Wallpapers
          </NavLink>
        </li>
        <li>
          <NavLink to="/download" exact activeClassName="is-active">
            Download
          </NavLink>
        </li>
        <li>
          <NavLink to="/options" activeClassName="is-active">
            Options
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
