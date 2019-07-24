import React from 'react';
import classnames from 'classnames';
import styles from './callToActionButton.module.scss';

const CallToActionButton = ({ withShadow }) => {
  return (
    <a
      href="https://mailchi.mp/9360529dd3a4/wevoted"
      target="_blank"
      className={classnames(styles.ctaButton, withShadow && styles.withShadow)}
    >
      Join Our Revolution
    </a>
  );
};

export default CallToActionButton;
