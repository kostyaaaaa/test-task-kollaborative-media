import { func, oneOf, string } from 'prop-types';
import React from 'react';

const TextInput = ({ type, id, className, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

TextInput.defaultProps = {
  id: '',
  className: '',
  value: '',
};

TextInput.propTypes = {
  type: oneOf(['text', 'email', 'tel']).isRequired,
  id: string,
  className: string,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  value: string,
};

export default TextInput;
