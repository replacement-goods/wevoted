import React from 'react';
import styles from './pinktext.module.scss';

const PinkText = ({ text, style }) => {
  return (
    <p style={style} className={styles.pinkText}>{text}</p>
  );
};

export default PinkText;