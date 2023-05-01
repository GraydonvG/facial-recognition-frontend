import React, { Component } from 'react';
import { Label, InputField, Button } from '../FormComponents/FormComponents';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  submitOnEnterPress = (event) => {
    if (event.key === 'Enter') {
      this.onSubmitRegister();
    }
  };

  onSubmitRegister = () => {
    fetch('https://smart-brain-api-70fl.onrender.com/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
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
        <div
          className="shadow-3 br3 pa3 pa4-ns mv3 tc black-80 measure"
          submitOnEnterPress={this.submitOnEnterPress}>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <Label
                labelName={'Name'}
                forLabel={'name'}
              />
              <InputField
                inputFieldType={'text'}
                inputFieldName={'name'}
                onFieldChange={this.onNameChange}
                submitOnEnterPress={this.submitOnEnterPress}
              />
            </div>
            <div className="mv3">
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
            buttonValue={'Register'}
            onButtonPress={this.onSubmitRegister}
          />
          <p className="f4 black db b mt4">Already have an account?</p>
          <Button
            buttonType={'submit'}
            buttonValue={'Sign In'}
            onButtonPress={() => onRouteChange('signin')}
          />
        </div>
      </div>
    );
  }
}

export default Register;
