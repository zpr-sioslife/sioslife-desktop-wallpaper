import React, { Component, Fragment } from 'react';
import { Button } from '../../components/UI';

class Download extends Component {
  handleClick = e => { console.log('download clicked: ' + e.target.innerHTML); }

  handleInput = e => { console.log(e.target.value); }

  render() {
    return (
      <Fragment>
        <Button label="Download" onClick={this.handleClick}></Button>
      </Fragment>
    );
  }
}

export default Download;