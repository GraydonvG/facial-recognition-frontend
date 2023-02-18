import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="small-window tc mt4">
      <div className="white f3 pl3 pr3">{`${name}, your current entry count is...`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
