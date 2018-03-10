import React, { PureComponent } from 'react';
import Banner from 'components/Banner';
import OptionsSection from 'components/OptionsSection';
import './styles.scssm';

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <OptionsSection />
      </div>
    );
  }
}

export default Home;