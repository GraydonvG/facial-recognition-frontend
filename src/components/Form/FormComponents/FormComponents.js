import React from 'react';

export const FormContainer = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </div>
  );
};

export const FormCard = ({ children }) => {
  return <div className="shadow-3 br3 pa3 pa4-ns mv3 tc black-80 measure">{children}</div>;
};

export const FormFieldset = ({ children }) => {
  return <fieldset className="ba b--transparent ph0 mh0">{children}</fieldset>;
};

export const FormLegend = ({ legendText }) => {
  return <legend className="f1 fw6 ph0 mh0">{legendText}</legend>;
};

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

export const FormText = ({ text }) => {
  return <p className="f4 black db b mt4">{text}</p>;
};
