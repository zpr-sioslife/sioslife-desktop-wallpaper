import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className="button is-primary" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;