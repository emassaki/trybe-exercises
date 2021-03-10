import React from 'react';

export default function RadioButton({ name, value, children, checked }) {
  return (
    <label>
      {children}
      <input type="radio" name={name} value={value} checked={checked}></input>
    </label>
  );
}
