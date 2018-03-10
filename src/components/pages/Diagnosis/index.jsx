import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Steps from 'components/Steps';
import './styles.scssm';

class Diagnosis extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <Steps />
      </div>
    );
  }
}

export default Diagnosis;