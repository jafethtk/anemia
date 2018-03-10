import React, { Component } from 'react';
import DiagnosisTable from './DiagnosisTable';
import DiagnosisModal from './DiagnosisModal';
import './styles.scssm';

class PatientProfile extends Component {
  state = {
    diagnosisModalOpen: false,
    currentDiagnosis: {}
  }

  openModal = diagnosis => {
    this.setState({
      diagnosisModalOpen: true,
      currentDiagnosis: diagnosis
    });
  }

  closeModal = () => {
    this.setState({
      diagnosisModalOpen: false,
      currentDiagnosis: null
    });
  }

  handleSubmit = values => {
    console.log('values', values);
    const { currentDiagnosis } = this.state;
    const { patient } = this.props;

    if(currentDiagnosis.order.status != 'Entregado'){
      /* fetch('http://1bf56fa8.ngrok.io/api/user', {
        body: JSON.stringify({...values, dni: patient.dni, result_id: currentDiagnosis._id}),
        method: 'POST'
      }).then(this.closeModal); */
      if(currentDiagnosis.order.status === 'En Proceso' && values.delivered){
        currentDiagnosis.order.status = 'Entregado';
        console.log('delivered!')
      }

      if(currentDiagnosis.order.status === 'Registrado'){
        console.log('deliver date!', values.deliveryDate)
        currentDiagnosis.order.status = 'En Proceso';
      }

    }
    this.closeModal();
  }

  render() {
    const { patient } = this.props;
    const { diagnosisModalOpen, currentDiagnosis } = this.state;

    return (
      <div>
        <div styleName="patient-profile-info ">
          <div>Edad: {patient.age}</div>
          <div>Sexo: {patient.sex}</div>
        </div>
        <DiagnosisTable diagnosisHistory={patient.results} onSeeMoreClick={this.openModal} />
        {diagnosisModalOpen && <DiagnosisModal
          onSubmit={this.handleSubmit}
          diagnosis={currentDiagnosis}
          patient={patient}
          active={diagnosisModalOpen}
          handleClose={this.closeModal} />}
      </div>
    );
  }
}

export default PatientProfile;
