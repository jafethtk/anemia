import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logoImage from 'assets/images/white-logo.png';
import './styles.scssm';

const Button = ({
  text,
  onClick,
  type,
}) => (
  <button styleName={`${type}-button`} onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  text: null,
  onClick: null,
  type: 'primary',
};

export default Button;