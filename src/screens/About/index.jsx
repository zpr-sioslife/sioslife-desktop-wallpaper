import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import nodquire from "../../helpers/node-require";

const { shell } = nodquire('electron');
const openLink = () => shell.openExternal("https://github.com/zpr-sioslife/sioslife-desktop-wallpaper");

const About = () => (
  <Fragment>
    <Link to="/"><span role="img" aria-label="back">👈 Home</span></Link>
    <br/>
    <h4>Wazzah!! A clean Layout page !</h4>
    <a onClick={openLink}>github/zpr-sioslife/sioslife-desktop-wallpaper</a>
  </Fragment>
);

export default About;