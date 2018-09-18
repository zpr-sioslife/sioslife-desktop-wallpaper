import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const nodeProcess = window.nodeRequire('process');
const path = window.nodeRequire('path');
const isDev = window.isDev;

const result = window.nodeRequire('dotenv')
  .config({
    path: isDev ? 
    path.join(nodeProcess.cwd(), '.env') : 
    path.join(nodeProcess.cwd(), 'resources/app', '.env')
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        React NODE_ENV: {process.env.NODE_ENV}<br/>
        Electron: {nodeProcess.versions.electron}<br/>
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
