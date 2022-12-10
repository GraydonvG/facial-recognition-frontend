import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <div className="small-window tc">
        <p className="f3">{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
        <div className="center">
          <div className="form center pa4 br3 shadow-3">
            <input
              className="small-input f4 pa2 w-70 center"
              type="text"
              onChange={onInputChange}
            />
            <button
              className="small-btn f4 ph3 pv2 w-30 link grow dib white bg-light-purple"
              onClick={onButtonSubmit}>
              Detect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
