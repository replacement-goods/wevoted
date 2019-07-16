import React from 'react';
import classnames from 'classnames';
import styles from './halfpage.module.scss';

const HalfPageBlock = ({ children, hasBottomImage = false, className }) => {
  return (
    <div className={classnames(styles.halfPageContainer, hasBottomImage && styles.hasBottomImage, className && className)}>
      {children}
    </div>
  );
};

export default HalfPageBlock;