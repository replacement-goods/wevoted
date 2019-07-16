import React from 'react';
import classnames from 'classnames';
import styles from './halfpage.module.scss';

const HalfPageBlock = ({ children, className }) => {
  return (
    <div className={classnames(styles.halfPageContainer, className && className)}>
      {children}
    </div>
  );
};

export default HalfPageBlock;