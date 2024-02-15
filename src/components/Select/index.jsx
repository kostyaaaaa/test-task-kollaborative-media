import { func, node, string } from 'prop-types';
import React from 'react';

const Select = ({ children, id, className, onChange, value }) => {
  return (
    <select value={value} id={id} className={className} onChange={onChange}>
      {children}
    </select>
  );
};

Select.defaultProps = {
  id: '',
  className: '',
};

Select.propTypes = {
  children: node.isRequired,
  id: string,
  className: string,
  onChange: func.isRequired,
  value: string.isRequired,
};

export default Select;
