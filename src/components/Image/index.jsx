import { string } from 'prop-types';
import React from 'react';

const Image = ({ src, className }) => {
  return <img alt="" src={src} className={className} />;
};

Image.defaultProps = {
  className: '',
};

Image.propTypes = {
  className: string,
  src: string.isRequired,
};

export default Image;
