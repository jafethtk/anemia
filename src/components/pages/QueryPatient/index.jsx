import React, { Component } from 'react';
import PatientProfile from './PatientProfile';
import Banner from 'components/Banner';
import Button from 'components/Button';
import './styles.scssm';

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
    searchResult,
    searching: true,
    searchDone: false
  }

  searchPatient = () => {
    const { form } = this.state;
    console.log('Search patient with dni: ', form.values);

    let patient;

    fetch(`http://1bf56fa8.ngrok.io/api/user/get/${form.values.dni}`)
    .then(response => response.json())
    .then(data => patient = data[0])
    .catch(err => console.log('Fetch Error', err))
    .finally(() => {
      this.setState({
        searching: false,
        searchDone: true,
        searchResult: patient
      });
    });
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
    const { searchResult, searchDone } = this.state;

    return(
      <div>
        <Banner/>

        <div styleName="container">
          <div className="helper-wrapper">
            <h1 styleName="title">Registro de Diagnóstico</h1>

            <div styleName="content">
              <div styleName="input-group">
                <label styleName="label" htmlFor="dni">DNI</label>
                <input name="dni" type="text" onChange={this.handleInputChange} styleName="input" maxLength="8"/>
              </div>

              <div styleName="search-patient-btn-box">
              <Button text="Buscar" onClick={this.searchPatient}/>
              </div>

              {searchDone && (searchResult ? <PatientProfile patient={searchResult}/> : <div>Ningun resultado</div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QueryPatient;