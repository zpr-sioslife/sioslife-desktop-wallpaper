import React from 'react';

const Number = ({ defaultValue, onChange, disabled }) => {
  return (
    <input type="number" className="input" onChange={onChange} defaultValue={defaultValue} disabled={disabled} />
  );
}

export default Number;