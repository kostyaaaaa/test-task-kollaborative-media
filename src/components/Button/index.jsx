import { func, node, string } from 'prop-types';
import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  className: string,
};

export default Button;
