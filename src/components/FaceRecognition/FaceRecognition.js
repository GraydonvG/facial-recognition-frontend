import React from 'react';

const FaceRecognition = ({ image }) => {
  return (
    <div className="center mt4">
      <img
        alt=""
        src={image}
      />
    </div>
  );
};

export default FaceRecognition;
