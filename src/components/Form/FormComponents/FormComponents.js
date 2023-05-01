import React from 'react';

export const Label = ({ labelName, forLabel }) => {
  return (
    <label
      className="db fw6 lh-copy f4"
      htmlFor={forLabel}>
      {labelName}
    </label>
  );
};

export const InputField = ({ onFieldChange, inputFieldType, inputFieldName, submitOnEnterPress }) => {
  return (
    <input
      style={{ width: '100%', border: 'solid black 1.6px' }}
      className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white"
      type={inputFieldType}
      name={inputFieldName}
      onChange={onFieldChange}
      onKeyDown={submitOnEnterPress}
    />
  );
};

export const Button = ({ onButtonPress, buttonType, buttonValue }) => {
  return (
    <input
      style={{ border: 'solid black 1.6px' }}
      className="b br3 ph3 pv2 input-reset ba b--black bg-transparent pointer f4 dib hover-bg-black hover-white"
      type={buttonType}
      value={buttonValue}
      onClick={onButtonPress}
    />
  );
};
