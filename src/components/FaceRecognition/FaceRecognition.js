import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  const handleScrollOnLoad = () => {
    const image = document.getElementById('inputimage');
    if (image) {
      image.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="center">
      <div className="absolute mt4 shadow-3">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
          onLoad={handleScrollOnLoad}
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
