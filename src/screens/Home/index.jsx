import React, { Component, Fragment } from 'react';
import Button from '../../components/UI/Button';
import Text from '../../components/UI/Text';
import './styles.css';

class Download extends Component {
  handleClick = e => { console.log('download clicked ' + e.target); }

  handleInput = e => { console.log(e.target.value); }

  render() {
    return (
      <Fragment>
        <div className="columns">
          <div className="column">
            <Text onChange={this.handleInput}></Text>
          </div>
          <div className="column">
            <Button label="download" onClick={this.handleClick}></Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Download;