import React, { Component } from 'react';
import PatientProfile from './PatientProfile';

const searchResult = {
    age: 21,
    sex: 'M',
    diagnosisHistory: [
        {
            number: '3',
            date: '03/03/2018',
            status: 'Registrado',
            supplements: 'Supplements'
        },
        {
            number: '2',
            date: '02/03/2018',
            status: 'En Proceso',
            supplements: 'Supplements'
        },
        {
            number: '1',
            date: '01/03/2018',
            status: 'Entregado',
            supplements: 'Supplements'
        },
    ]
};

class QueryPatient extends Component {
    state = {
        form: {
            values: {}
        },
        searchResult
    }

    searchPatient = () => {
        console.log('Search patient with dni: ', this.state.form.values);
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
        const { searchResult } = this.state;

        return(
            <div>
                <h1>Consulta Paciente</h1>

                <div>
                    <label htmlFor="dni">DNI</label>
                    <input name="dni" type="text" onChange={this.handleInputChange}/>
                    <button onClick={this.searchPatient}>Buscar</button>
                </div>

                {searchResult  && <PatientProfile patient={searchResult} />}
            </div>
        );
    }
}

export default QueryPatient;