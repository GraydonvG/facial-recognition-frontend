import React, { Component } from 'react';
import {
  Label,
  InputField,
  Button,
  FormText,
  FormFieldset,
  FormLegend,
  FormContainer,
  FormCard,
} from '../FormComponents/FormComponents';

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
      <FormContainer>
        <FormCard>
          <FormFieldset>
            <FormLegend legendText={'Sign In'} />
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
          </FormFieldset>
          <Button
            buttonType={'submit'}
            buttonValue={'Sign in'}
            onButtonPress={this.onSubmitSignIn}
          />
          <FormText text={"Don't have an account?"} />
          <Button
            buttonType={'submit'}
            buttonValue={'Register'}
            onButtonPress={() => onRouteChange('register')}
          />
        </FormCard>
      </FormContainer>
    );
  }
}

export default Signin;
