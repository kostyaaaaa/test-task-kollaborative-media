import { bool, func, oneOf, string } from 'prop-types';
import React from 'react';

const TextInput = ({
  type,
  id,
  className,
  placeholder,
  onChange,
  value,
  isInvalid,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={`${className}${isInvalid ? ' outline outline-2 outline-red-600' : ''}`}
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
  isInvalid: false,
};

TextInput.propTypes = {
  type: oneOf(['text', 'email', 'tel']).isRequired,
  id: string,
  className: string,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  value: string,
  isInvalid: bool,
};

export default TextInput;
