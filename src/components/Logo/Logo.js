import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="center ma0 mt0 ml3">
      <Tilt
        className="Tilt br3 shadow-2 parallax-effect-img"
        perspective={1000}
        tiltReverse={true}
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        transitionSpeed={1500}>
        <div className="pa3 inner-element">
          <img
            className="pointer"
            src={logo}
            alt={'brain'}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
