import React, { Component } from 'react';
import Modal from 'components/Modal';

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

        switch(diagnosis.status){
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
                formValues = null;

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

    render(){
        const { patient, diagnosis, active, handleClose } = this.props;
        let form;

        switch(diagnosis.status){
            case 'Registrado':
                form = (
                    <div>
                        <label htmlFor="deliveryDate">Fecha de Entrega</label>
                        <input type="date" name="deliveryDate"  onChange={this.handleInputChange}/>
                    </div>
                );
                break;

            case 'En Proceso':
                form = (
                    <div>
                        <div>¿Entregado?</div>
                        <div>
                            <label htmlFor="delivered">Si</label>
                            <input type="radio" name="delivered" value="true" onChange={this.handleInputChange}/>
                        </div>

                        <div>
                            <label htmlFor="delivered">No</label>
                            <input type="radio" name="delivered" value="false" onChange={this.handleInputChange}/>
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
                    <h2>Detalle</h2>
                    <div>
                        <div>DNI: {patient.dni}</div>
                        <div>Edad: {patient.age}</div>
                        <div>Sexo: {patient.sex}</div>
                    </div>

                    <div>
                        <h3>Suplementos</h3>
                        <div>
                            {patient.supplements}
                        </div>
                    </div>

                    {form}

                    <div>
                        <button onClick={this.handleSubmit}>Aplicar</button>
                    </div>
                </div>
            </Modal>
        );
    }
};

export default DiagnosisModal;