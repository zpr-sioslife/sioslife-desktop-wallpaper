import React from 'react';
import { Link } from 'react-router-dom';
import nrequire from 'utils/node-require';
const { shell } = nrequire('electron');

const openLink = () =>
  shell.openExternal('https://github.com/zpr-sioslife/sioslife-desktop-wallpaper');

const PageAbout = () => (
  <>
    <Link to="/">
      <span role="img" aria-label="back">
        👈 Home
      </span>
    </Link>
    <br />
    <h4>Wazzah!! A clean Layout page !</h4>
    <button onClick={openLink}>github/zpr-sioslife/sioslife-desktop-wallpaper</button>
  </>
);

export default PageAbout;
