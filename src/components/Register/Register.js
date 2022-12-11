import React from 'react';

const Register = ({ onRouteChange }) => {
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
                  className="b grow br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <label
                className="db fw6 lh-copy f4"
                htmlFor="email-address">
                Email
              </label>
              <input
                style={{ width: '18rem', border: 'solid black 0.1rem' }}
                className="b grow br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                type="email"
                name="email-address"
                id="email-address"
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
                className="b grow br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              style={{ border: 'solid black 0.1rem' }}
              className="b br3 ph3 pv2 input-reset ba bg-transparent grow pointer f4 dib"
              type="submit"
              value="Register"
              onClick={() => onRouteChange('home')}
            />
          </div>
          <div className="mt4">
            <p
              href="#0"
              className="f4 black db b"
              onClick={() => onRouteChange('register')}>
              <span className="bd mb1">or,</span> if you have an account
            </p>
          </div>
          <input
            style={{ border: 'solid black 0.1rem' }}
            className="b br3 ph3 pv2 input-reset ba bg-transparent grow pointer f4 dib"
            type="submit"
            value="Sign In"
            onClick={() => onRouteChange('signin')}
          />
          <div className="lh-copy mt3"></div>
        </div>
      </main>
    </article>
  );
};

export default Register;
