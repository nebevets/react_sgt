import React from 'react';

const Input = ({onChange, type, name, id, value, labelText}) => {
  return(
    <div className="input-field">
      <input
        required
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        value={value}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
}

export default Input;
