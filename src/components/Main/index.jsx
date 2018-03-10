import React from 'react';
import backgroundImage from 'assets/images/banner.jpg';
import evaluationIcon from 'assets/images/evaluation.png';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import './styles.scssm';

const Main = () => (
  <div styleName="container">
    <div className="helper-wrapper" styleName="center">
      <h1 styleName="title">
        <div>JUNTOS EN LA LUCHA CONTRA LA ANEMIA</div>
        <div style={{marginTop: '30px'}}>
          <Link to="/dashboard" styleName="button">INGRESA AQUÍ</Link>
        </div>
      </h1>
      <img src={evaluationIcon} alt="Test" styleName="icon" />
    </div>
  </div>
);

export default Main;