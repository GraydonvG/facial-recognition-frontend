import React from 'react';
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="center ma0 mt0 ml3">
      <Tilt
        tiltReverse={true}
        className="Tilt br3 shadow-2"
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        transitionSpeed={1500}
        scale={1.2}>
        <div className="pa3">
          <img
            className="grow-large pointer"
            src={logo}
            alt={'brain'}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
