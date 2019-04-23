import React from 'react';
import PropTypes from 'prop-types';

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

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  labelText: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input;
