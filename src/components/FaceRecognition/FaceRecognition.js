import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt4">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {box.map((item) => {
          return (
            <div
              key={item.topRow}
              className="bounding-box"
              style={{ top: item.topRow, bottom: item.bottomRow, left: item.leftCol, right: item.rightCol }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
