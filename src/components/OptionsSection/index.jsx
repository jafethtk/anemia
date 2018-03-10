import React from 'react';
import { Link } from 'react-router-dom';
import diagnosisIcon from 'assets/images/diagnosis.png';
import historyIcon from 'assets/images/history.png';
import './styles.scssm';

const OptionsSection = () => (
  <div styleName="container">
    <div className="helper-wrapper">
      <h1 styleName="title">¿Qué deseas realizar?</h1>
      <div styleName="options">
        <Link to="/diagnostico" styleName="option-wrapper">
          <div styleName="option">
            <div styleName="icon-wrapper">
              <img src={diagnosisIcon} alt="Diagnóstico"/>
            </div>
            <div styleName="text">
              Realizar diagnóstico
            </div>
          </div>
        </Link>
        <Link to="/consulta-paciente" styleName="option-wrapper">
          <div styleName="option">
            <div styleName="icon-wrapper">
              <img src={historyIcon} alt="Historial"/>
            </div>
            <div styleName="text">
              Consultar historia clínica
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default OptionsSection;