import React from 'react';

const InputText = ({ value, onChange, disabled }) => (
  <input type="text" className="input" onChange={onChange} value={value} disabled={disabled} />
);

export default InputText;
