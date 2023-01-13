import { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from '../components/Particles/Particles';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';

const app = new Clarifai.App({
  apiKey: '57aa2ebd97274c318e2872cc604054af',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - clarifaiFace.right_col * width,
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    const { imageUrl, box, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" />
        {route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : (
          <>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              box={box}
              imageUrl={imageUrl}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
