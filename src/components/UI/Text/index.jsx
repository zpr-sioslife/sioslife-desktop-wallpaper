import React from 'react';

const Text = ({ defaultValue, onChange, disabled }) => (
  <input type="text" className="input" onChange={onChange} defaultValue={defaultValue} disabled={disabled} />
);

export default Text;