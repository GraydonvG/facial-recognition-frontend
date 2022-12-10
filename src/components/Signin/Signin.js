import React from 'react';

const Signin = ({ onRouteChange }) => {
  return (
    <article
      className="center shadow-3 br3 pa3 pa4-ns mv3"
      style={{ width: 'fit-content' }}>
      <main className="tc black-80">
        <form className="measure">
          <fieldset
            id="sign_up"
            className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label
                className="db fw6 lh-copy f4"
                for="email-address">
                Email
              </label>
              <input
                style={{ width: '18rem' }}
                className="grow pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label
                className="db fw6 lh-copy f4"
                for="password">
                Password
              </label>
              <input
                style={{ width: '18rem' }}
                className="grow b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              type="submit"
              value="Sign in"
              onClick={() => onRouteChange('home')}
            />
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0"
              className="f4 grow black db pointer"
              onClick={() => onRouteChange('register')}>
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default Signin;
