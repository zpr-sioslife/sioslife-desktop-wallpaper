import React from 'react';

const Text = ({ text, onChange }) => {
  return (
    <input type="text" className="input" onChange={onChange}/>
  );
}

export default Text;