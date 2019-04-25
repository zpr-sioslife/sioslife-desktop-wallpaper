import React from 'react';

const InputNumber = ({ value, onChange, min, max, disabled }) => {
  return (
    <input
      type="number"
      className="input"
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      disabled={disabled}
    />
  );
};

export default InputNumber;
