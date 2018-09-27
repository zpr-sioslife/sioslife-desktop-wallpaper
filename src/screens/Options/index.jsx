import React, { Component, Fragment } from 'react';
import DownloadSource from '../../components/download-source';

class App extends Component {
  render() {
    return (
      <Fragment>
        <DownloadSource source="reddit" fallbackOpts={{category: "wallpapers", limit: 20}} />
        <DownloadSource disabled source="unsplash" fallbackOpts={{category: "ambient", limit: 10}} />
      </Fragment>
    );
  }
}

export default App;