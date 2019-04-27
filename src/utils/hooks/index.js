import { useState } from 'react';

function useInputValue(initialValue = '') {
  const [value, SetValue] = useState(initialValue);

  const handleInputChange = evt => {
    const newValue = evt.target.value;
    SetValue(newValue);
  };

  return [value, handleInputChange];
}

export { useInputValue };
