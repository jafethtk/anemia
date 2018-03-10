import React, { PureComponent } from 'react';
import Banner from 'components/Banner';
import Main from 'components/Main';
import feature1Icon from 'assets/images/feature1.png';
import feature2Icon from 'assets/images/feature2.png';
import feature3Icon from 'assets/images/feature3.png';
import './styles.scssm';

const Landing = ({
}) => (
  <div>
    <Banner />
    <Main />
    <div styleName="container is-grey">
      <div className="helper-wrapper">
        <h2 styleName="title">Características</h2>
        <div styleName="features">
          <div styleName="feature">
            <div styleName="image-wrapper">
              <img src={feature1Icon} alt="1"/>
            </div>
            <div styleName="feature-title">Rápido</div>
            <div styleName="feature-description">
              Detección de anemia rápida y sencilla. En solo 2 pasos recibe un diagnóstico, dieta y suplementos recomendados.
            </div>
          </div>
          <div styleName="feature">
            <div styleName="image-wrapper">
              <img src={feature2Icon} alt="1"/>
            </div>
            <div styleName="feature-title">No invasivo</div>
            <div styleName="feature-description">
              No requiere sacar muestras de sangre, con solo una foto de los párpados del paciente la aplicación podrá realizar un diagnóstico igual de preciso.
            </div>
          </div>
          <div styleName="feature">
            <div styleName="image-wrapper">
              <img src={feature3Icon} alt="1"/>
            </div>
            <div styleName="feature-title">Confiable</div>
            <div styleName="feature-description">
              Resultados precisos gracias a un avanzado algoritmo de detección por imágenes.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div styleName="container">
      <div className="helper-wrapper">
        <h2 styleName="title">¿Cómo funciona?</h2>
        <div styleName="points">
          <div styleName="point">
            <div styleName="number">1</div>
            <div styleName="description">Introduce tu DNI, edad y sexo.</div>
          </div>
          <div styleName="point">
            <div styleName="number">2</div>
            <div styleName="description">Toma una foto del párpado inferior de tu ojo.</div>
          </div>
          <div styleName="point">
            <div styleName="number">3</div>
            <div styleName="description">Recoge tus resultados y recomendaciones (dieta, suplementos)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;