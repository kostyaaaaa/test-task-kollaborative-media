import { func, string } from 'prop-types';
import React from 'react';

const Radio = ({ onChange, id, name, checked, value }) => {
  return (
    <input
      type="radio"
      name={name}
      onChange={onChange}
      id={id}
      checked={checked}
      value={value}
    />
  );
};

Radio.defaultProps = {
  id: '',
  checked: '',
  value: '',
};

Radio.propTypes = {
  onChange: func.isRequired,
  id: string,
  name: string.isRequired,
  checked: string,
  value: string,
};

export default Radio;
