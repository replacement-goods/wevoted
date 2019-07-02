import React from 'react';
import classnames from 'classnames';
import styles from './callToActionButton.module.scss';

const CallToActionButton = ({ withShadow }) => {
  return (
    <button className={classnames(styles.ctaButton, withShadow && styles.withShadow)}>Join Our Little Revolution</button>
  );
};

export default CallToActionButton;
