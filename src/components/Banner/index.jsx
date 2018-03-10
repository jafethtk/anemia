import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logoImage from 'assets/images/white-logo.png';
import './styles.scssm';

const Banner = ({
  logoUrl,
}) => (
  <div styleName="container">
    <div className="helper-wrapper">
      <a href={logoUrl} styleName="logo-link">
        <img src={logoImage} alt="Anemiapp" styleName="logo" />
      </a>
    </div>
  </div>
);

Banner.defaultProps = {
  logoUrl: '/',
};

export default Banner;