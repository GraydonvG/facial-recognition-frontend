import React, { Component } from 'react';

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

  onSubmitRegister = () => {
    fetch('http://localhost:3000/register', {
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
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article
        className="center shadow-3 br3 pa3 pa4-ns mv3"
        style={{ width: 'fit-content', transform: 'translate(0, 30%)' }}>
        <main className="tc black-80">
          <div className="measure">
            <fieldset
              id="Register"
              className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <div className="mv3">
                  <label
                    className="db fw6 lh-copy f4"
                    htmlFor="name">
                    Name
                  </label>
                  <input
                    style={{ width: '18rem', border: 'solid black 0.1rem' }}
                    className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <label
                  className="db fw6 lh-copy f4"
                  htmlFor="email-address">
                  Email
                </label>
                <input
                  style={{ width: '18rem', border: 'solid black 0.1rem' }}
                  className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label
                  className="db fw6 lh-copy f4"
                  htmlFor="password">
                  Password
                </label>
                <input
                  style={{ width: '18rem', border: 'solid black 0.1rem' }}
                  className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                style={{ border: 'solid black 0.1rem' }}
                className="b br3 ph3 pv2 input-reset ba bg-transparent pointer f4 dib hover-bg-black hover-white"
                type="submit"
                value="Register"
                onClick={this.onSubmitRegister}
              />
            </div>
            <div className="mt4">
              <p className="f4 black db b">Have an account?</p>
            </div>
            <input
              style={{ border: 'solid black 0.1rem' }}
              className="b br3 ph3 pv2 input-reset ba bg-transparent pointer f4 dib hover-bg-black hover-white"
              type="submit"
              value="Sign In"
              onClick={() => onRouteChange('signin')}
            />
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
