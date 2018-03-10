import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logoImage from 'assets/images/white-logo.png';
import './styles.scssm';

const Button = ({
  text,
  onClick,
  type,
  disabled
}) => (
  <button styleName={`${type}-button`} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  text: null,
  onClick: null,
  type: 'primary',
  disabled: false
};

export default Button;