import { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from '../components/Particles/Particles';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '57aa2ebd97274c318e2872cc604054af',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = (event) => {
    console.log(event.target.value);
    const { input } = this.state;
    this.setState({ imageUrl: input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => console.log(response.outputs[0].data.regions[0].region_info.bounding_box))
      .catch((err) => console.log(err));
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <Particles className="particles" />
        <FaceRecognition imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
