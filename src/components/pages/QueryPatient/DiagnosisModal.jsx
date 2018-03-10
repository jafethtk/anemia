import React, { Component } from 'react';
import Modal from 'components/Modal';
import './styles.scssm';
import Button from 'components/Button';

class DiagnosisModal extends Component {
  state = {
    form: {
      values: {}
    }
  }

  handleSubmit = () => {
    const { diagnosis, onSubmit } = this.props;
    const { form } = this.state;
    let formValues;

    switch (diagnosis.order.status) {
      case 'Registrado':
        formValues = {
          deliveryDate: form.values.deliveryDate
        };
        break;
      case 'En Proceso':
        formValues = {
          delivered: form.values.delivered
        };
        break;
      case 'Entregado':
      default:
        formValues = {};

    }

    onSubmit(formValues);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState, props) => ({
      form: {
        ...prevState.form,
        values: {
          ...prevState.form.values,
          [name]: value
        }
      }
    }));
  }

  render() {
    const { patient, diagnosis, active, handleClose } = this.props;
    let form;

    switch (diagnosis.order.status) {
      case 'Registrado':
        form = (
          <div>
            <label htmlFor="deliveryDate" styleName="diagnosis-modal-field">Fecha de Entrega</label>
            <input type="date" name="deliveryDate" onChange={this.handleInputChange} styleName="date-input"/>
          </div>
        );
        break;

      case 'En Proceso':
        form = (
          <div>
            <div styleName="diagnosis-modal-field">Estado</div>
            <div>
              <label htmlFor="delivered">Entregado</label>
              <input type="checkbox" name="delivered" value="true" onChange={this.handleInputChange} style={{marginLeft: 10}}/>
            </div>
          </div>
        );
        break;

      case 'Entregado':
      default:
        form = null;

    }

    return (
      <Modal active={active} handleClose={handleClose}>
        <div className="box">
          <h1 styleName="title">Detalle</h1>
          <div>
            <div><span styleName="diagnosis-modal-field">DNI:</span> {patient.dni}</div>
            <div><span styleName="diagnosis-modal-field">Edad:</span> {patient.age}</div>
            <div><span styleName="diagnosis-modal-field">Sexo:</span> {patient.sex}</div>
          </div>

          <div>
            <h2 styleName="diagnosis-modal-field">Suplementos:</h2>
            <div styleName="diagnosis-modal-supplement-box">
              {diagnosis.supplement}
            </div>
          </div>

          <div styleName="diagnosis-modal-form-box">
            {form}
          </div>

          <div styleName="diagnosis-modal-button-box">
            <Button text="Aplicar" onClick={this.handleSubmit} disabled={diagnosis.order.status === 'Registrado' && !this.state.form.values.deliveryDate}/>
          </div>
        </div>
      </Modal>
    );
  }
};

export default DiagnosisModal;