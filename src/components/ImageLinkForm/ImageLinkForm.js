import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit, submitPictureOnEnterPress }) => {
  return (
    <>
      <div className="tc form-container">
        <p className="f3 pl3 pr3">{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
        <div className="form center pa4 br3 shadow-3">
          <input
            className="form-input f4 pa2 center"
            type="text"
            placeholder="Enter image URL here"
            onChange={onInputChange}
            onKeyDown={submitPictureOnEnterPress}
          />
          <button
            className="form-btn f4 ph3 pv2 link grow dib white bg-light-purple"
            onClick={onPictureSubmit}>
            Detect
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageLinkForm;
