import React, { Component } from 'react';
import { InputButton } from 'components';

class Download extends Component {
  handleClick = e => {
    console.log('download clicked: ' + e.target.innerHTML);
  };

  render() {
    return (
      <>
        <InputButton label="Download" onClick={this.handleClick} />
      </>
    );
  }
}

export default Download;
