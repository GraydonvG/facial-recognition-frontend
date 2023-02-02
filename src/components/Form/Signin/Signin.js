import React, { Component } from 'react';
import {
  Label,
  InputField,
  Button,
  Paragraph,
  FormFieldset,
  FormLegend,
  FormContainer,
  FormCard,
} from '../FormComponents';

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
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
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
        <FormCard submitOnEnterPress={this.submitOnEnterPress}>
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
              />
            </div>
          </FormFieldset>
          <Button
            buttonType={'submit'}
            buttonValue={'Sign in'}
            onButtonPress={this.onSubmitSignIn}
          />
          <Paragraph paragraphText={"Don't have an account?"} />
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
