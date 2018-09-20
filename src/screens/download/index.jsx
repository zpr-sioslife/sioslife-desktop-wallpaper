import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import nodquire from '../../helpers/node-require';

const nodeProcess = nodquire('process');
const path = nodquire('path');
const isDev = window.isDev;

const result = nodquire('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Download</h1>
          <Link to="/options">Options</Link>
        </header>
        <hr/>
        React NODE_ENV: {process.env.NODE_ENV}<br/>
        Electron: {nodeProcess.versions.electron}<br/>
        Electron isDev: {isDev.toString()}<br/>
        Node: {nodeProcess.version}<br/>
        Chrome: {nodeProcess.versions.chrome}<br/>
        Process Type: {nodeProcess.type}<br/>
        Process CWD: {nodeProcess.cwd()}<br/>
        {JSON.stringify(result.parsed)}<br/>
        {path.join(__filename)}<br/>
      </div>
    );
  }
}

export default App;