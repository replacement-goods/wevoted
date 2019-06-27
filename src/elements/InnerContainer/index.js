import React from 'react';
import './styles.scss';

const InnerContainer = ({ children }) => {
  return (
    <div className="innerContainer">
      {children}
    </div>
  );
};

export default InnerContainer;