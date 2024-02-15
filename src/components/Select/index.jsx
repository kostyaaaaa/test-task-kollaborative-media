import { bool, func, node, string } from 'prop-types';
import React from 'react';

const Select = ({ children, id, className, onChange, value, isInvalid }) => {
  return (
    <select
      value={value}
      id={id}
      className={`${className}${isInvalid ? ' outline outline-2 outline-red-600' : ''}`}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

Select.defaultProps = {
  id: '',
  className: '',
  isInvalid: false,
};

Select.propTypes = {
  children: node.isRequired,
  id: string,
  className: string,
  onChange: func.isRequired,
  value: string.isRequired,
  isInvalid: bool,
};

export default Select;
