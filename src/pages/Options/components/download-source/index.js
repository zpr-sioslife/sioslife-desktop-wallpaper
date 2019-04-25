import React, { Component } from 'react';
import { Text, Number } from 'components/UI';
import './styles.css';

class DownloadSource extends Component {
  handleCategoryInput = e => {
    console.log(e.target.value);
  };
  handleLimitInput = e => {
    console.log(e.target.value);
  };

  render() {
    const { source, fallbackOpts, disabled } = this.props;
    const category = fallbackOpts.category;
    const limit = fallbackOpts.limit;

    return (
      <div className="field">
        <label className={`label ${disabled ? 'has-text-grey-light' : ''}`}>{source}</label>
        <div className="control columns">
          <div className="column is-one-quarter">
            <Text onChange={this.handleCategoryInput} defaultValue={category} disabled={disabled} />
          </div>
          <div className="control column is-one-quarter">
            <Number onChange={this.handleLimitInput} defaultValue={limit} disabled={disabled} />
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadSource;
