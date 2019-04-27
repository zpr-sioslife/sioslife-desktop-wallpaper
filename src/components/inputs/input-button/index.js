import React from 'react';

const InputButton = ({ label, onClick }) => {
  return (
    <button className="button is-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default InputButton;
