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
    fetch('https://smart-brain-7d96.onrender.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
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
      <FormContainer>
        <FormCard submitOnEnterPress={this.submitOnEnterPress}>
          <FormFieldset>
            <FormLegend legendText={'Register'} />
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
          </FormFieldset>
          <Button
            buttonType={'submit'}
            buttonValue={'Register'}
            onButtonPress={this.onSubmitRegister}
          />
          <FormText text={'Already have an account?'} />
          <Button
            buttonType={'submit'}
            buttonValue={'Sign In'}
            onButtonPress={() => onRouteChange('signin')}
          />
        </FormCard>
      </FormContainer>
    );
  }
}

export default Register;
