import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import WebcamCapture from 'components/WebcamCapture';
import apiService from 'services/api';
import loaderIcon from 'assets/images/loader.gif';
import './styles.scssm';

class Steps extends PureComponent {
  state = {
    currentStep: 1,
    dniValue: '',
    ageValue: '',
    sexValue: '',
    isLoaderOpened: false,
  };

  goToStepTwo = () => {
    const {
      dniValue,
      ageValue,
      sexValue,
    } = this.state;

    const {
      onClickGoToStepTwo,
    } = this.props;

    !!dniValue
    && !!ageValue
    && !!sexValue
    && this.setState({currentStep: 2});
  };

  goToStepThree = () => {
    const {
      dniValue,
      ageValue,
      sexValue,
    } = this.state;

    const diagnosis = {
      dni: dniValue,
      age: ageValue,
      sex: sexValue,
      eyeImage: this.camera.getImage(),
    };

    this.submitDiagnosis(diagnosis);
  };

  submitDiagnosis = async (diagnosis) => {
    this.setState({ isLoaderOpened: true });
    try {
      const response = await apiService.setDiagnosis(diagnosis);
      this.setState({ isLoaderOpened: false });
      console.log(response);
      this.setState({ currentStep: 3 });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {
      currentStep,
      dniValue,
      ageValue,
      sexValue,
      isLoaderOpened,
    } = this.state;

    const className = isLoaderOpened ? 'is-active' : '';

    return (
      <div styleName="container">
        <div className="helper-wrapper">
          <h1 styleName="title">Registro de Diagnóstico</h1>
          <div styleName="steps">
            <div styleName="numbers">
              <div styleName={`number ${currentStep === 1 ? 'is-active' : ''}`}>1</div>
              <div styleName={`number ${currentStep === 2 ? 'is-active' : ''}`}>2</div>
              <div styleName={`number ${currentStep === 3 ? 'is-active' : ''}`}>3</div>
            </div>
          </div>
          <div styleName="content">
            <div styleName={`loader ${className}`}>
              <img src={loaderIcon} styleName="gif" alt="Cargando..."/>
            </div>
            {
              currentStep === 1 &&
              <div>
                <h2 styleName="subtitle">Datos del paciente</h2>
                <div styleName="input-group">
                  <label styleName="label">DNI</label>
                  <input
                    styleName="input"
                    type="text"
                    value={dniValue}
                    maxLength="8"
                    onChange={(e) => { this.setState({ dniValue: e.target.value }) }}
                  />
                </div>
                <div styleName="input-group">
                  <label styleName="label">Edad</label>
                  <input
                    styleName="input"
                    type="text"
                    value={ageValue}
                    maxLength="3"
                    onChange={(e) => { this.setState({ ageValue: e.target.value }) }}
                  />
                </div>
                <div styleName="input-group">
                  <label styleName="label">Sexo</label>
                  <div>
                    <input
                      type="radio"
                      id="sexm"
                      value="M"
                      name="sex"
                      checked={sexValue === 'M'}
                      onChange={(e) => { this.setState({ sexValue: e.target.value }) }}
                    />
                    <label htmlFor="sexm" styleName="label-radio">Masculino</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="sexf"
                      value="F"
                      name="sex"
                      checked={sexValue === 'F'}
                      onChange={(e) => { this.setState({ sexValue: e.target.value }) }}
                    />
                    <label htmlFor="sexf" styleName="label-radio">Femenino</label>
                  </div>
                </div>
                <div styleName="buttons">
                  <Link to="/dashboard">
                    <Button text="Regresar" type="secondary" onClick={() => {}}/>
                  </Link>
                  <Button text="Siguiente" onClick={this.goToStepTwo}/>
                </div>
              </div>
            }
            {
              currentStep === 2 &&
              <div>
                <h2 styleName="subtitle">Sube una foto</h2>
                <WebcamCapture ref={(camera) => { this.camera = camera; }}/>
                <div styleName="buttons">
                  <Button text="Regresar" type="secondary" onClick={() => { this.setState({ currentStep: 1 }) }}/>
                  <Button text="Siguiente" onClick={this.goToStepThree}/>
                </div>
              </div>
            }
            {
              currentStep === 3 &&
              <div></div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Steps;