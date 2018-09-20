import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Options</h1>

        <Link to="/">Download</Link>
      </div>
    );
  }
}

export default App;