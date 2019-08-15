import React from 'react';
import styles from './mobileCd.module.scss';
import CountdownClock from '../../elements/CountdownClock';

const MobileCountdown = () => {
  return (
    <div className={styles.mobileCdContainer}>
      <span className={styles.text}>Our IndieGogo launches in <CountdownClock /></span>
    </div>
  );
};

export default MobileCountdown;