import React, { Component } from 'react';
import { Label, InputField, Button } from '../FormComponents/FormComponents';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  submitOnEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitSignIn();
    }
  };

  onSubmitSignIn = () => {
    fetch('https://smart-brain-api-70fl.onrender.com/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch(console.log);
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className="shadow-3 br3 pa3 pa4-ns mv3 tc black-80 measure">
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <Label
                labelName={'Email'}
                forLabel={'email-address'}
              />
              <InputField
                inputFieldType={'email'}
                inputFieldName={'email-address'}
                onFieldChange={this.onEmailChange}
                submitOnEnterPress={this.submitOnEnterPress}
              />
            </div>
            <div className="mv3">
              <Label
                labelName={'Password'}
                forLabel={'password'}
              />
              <InputField
                inputFieldType={'password'}
                inputFieldName={'password'}
                onFieldChange={this.onPasswordChange}
                submitOnEnterPress={this.submitOnEnterPress}
              />
            </div>
          </fieldset>
          <Button
            buttonType={'submit'}
            buttonValue={'Sign in'}
            onButtonPress={this.onSubmitSignIn}
          />
          <p className="f4 black db b mt4">Don't have an account?</p>
          <Button
            buttonType={'submit'}
            buttonValue={'Register'}
            onButtonPress={() => onRouteChange('register')}
          />
        </div>
      </div>
    );
  }
}

export default Signin;
