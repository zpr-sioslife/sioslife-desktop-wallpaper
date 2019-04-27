import React from 'react';
import { InputText, InputNumber } from 'components';
import { useInputValue } from 'utils/hooks';
import './styles.css';

function DownloadSource({ source, category, limit, disabled }) {
  const [categoryVal, handleCategoryChange] = useInputValue(category);
  const [limitVal, handleLimitChange] = useInputValue(limit);

  return (
    <div className="field">
      <label className={`label ${disabled ? 'has-text-grey-light' : ''}`}>{source}</label>
      <div className="control columns">
        <div className="column is-one-quarter">
          <InputText value={categoryVal} onChange={handleCategoryChange} disabled={disabled} />
        </div>
        <div className="control column is-one-quarter">
          <InputNumber
            value={limitVal}
            onChange={handleLimitChange}
            disabled={disabled}
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadSource;
