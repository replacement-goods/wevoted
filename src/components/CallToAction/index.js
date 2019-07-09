import React from 'react';
import styles from './cta.module.scss';
import CallToActionButton from '../../elements/CallToActionButton';

const CallToAction = () => (
  <div className={styles.ctaContainer}>
    <CallToActionButton withShadow={true} />
  </div>
);

export default CallToAction;
