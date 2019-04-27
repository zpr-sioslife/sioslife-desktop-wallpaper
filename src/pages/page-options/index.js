import React, { Component } from 'react';
import DownloadSource from './components/download-source';

class Options extends Component {
  render() {
    return (
      <>
        <DownloadSource source="reddit" category="wallpapers" limit={20} />
        <DownloadSource source="unsplash" category="ambient" limit={10} disabled />
      </>
    );
  }
}

export default Options;
