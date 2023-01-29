import { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from '../components/Particles/Particles';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import './App.css';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    const { id, name, email, entries, joined } = data;
    this.setState({
      user: {
        id: id,
        name: name,
        email: email,
        entries: entries,
        joined: joined,
      },
    });
  };

  calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
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

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    const {
      input,
      user,
      user: { id },
    } = this.state;

    const YOUR_PERSONAL_TOKEN = '';

    const raw = JSON.stringify({
      user_app_id: {
        user_id: '',
        app_id: '',
      },
      inputs: [
        {
          data: {
            image: {
              url: input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Key ${YOUR_PERSONAL_TOKEN}`,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(user, { entries: count }));
            });
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((error) => console.log('error', error));
  };

  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({ isSignedIn: true });
    } else {
      this.setState(initialState);
    }
    this.setState({ route: route });
  };

  render() {
    const {
      imageUrl,
      box,
      route,
      user: { name, entries },
    } = this.state;
    return (
      <div className="App">
        <Particles className="particles" />
        {route === 'signin' ? (
          <Signin
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : route === 'register' ? (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Rank
              name={name}
              entries={entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit}
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
