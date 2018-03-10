import React, { PureComponent } from 'react';
import Webcam from 'react-webcam';
import cameraIcon from 'assets/images/camera.png';
import Button from 'components/Button';
import './styles.scssm';

class WebcamCapture extends PureComponent {
  state = {
    fileInput: null,
  };

  clickFileInput = (e) => {
    const input = document.getElementById('image').click();
  };

  onChangeValue = (e) => {
    const input = document.getElementById('image');

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        document.getElementById('preview').src = e.target.result;
        this.setState({ fileInput: e.target.result });
      }
      reader.readAsDataURL(input.files[0]);
    }
  };

  getImage = () => (
    this.state.fileInput
  );

  render() {
    const {
      fileInput,
    } = this.state;

    return (
      <div styleName="capture">
        <input type="file" accept="image/*" multiple capture="camera" styleName="hidden-input" id="image" onChange={this.onChangeValue}/>
        <div styleName="canva">
          <img src={cameraIcon} alt="Tomar foto" styleName="icon" />
          <img id="preview" src="#" styleName="preview" />
        </div>
        <div onClick={this.clickFileInput} styleName="button">
          TOMAR FOTO
        </div>
      </div>
    );
  }
}

export default WebcamCapture;