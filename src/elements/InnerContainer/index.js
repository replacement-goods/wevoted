import React from 'react';
import styles from './ic.module.scss';

const InnerContainer = ({ children }) => {
  return (
    <div className={styles.innerContainer}>
      {children}
    </div>
  );
};

export default InnerContainer;