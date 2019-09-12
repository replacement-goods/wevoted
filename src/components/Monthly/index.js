import React from 'react';
import styles from './monthly.module.scss';
import HalfPageBlock from '../../elements/HalfPageBlock';
import monthlyBox from '../../images/monthlyBox.jpg';

const Monthly = () => {
  return (
    <div className={styles.monthlyContainer}>
      <HalfPageBlock>
        <h3>Every month you'll<br />get a box like this.</h3>
      </HalfPageBlock>
      <HalfPageBlock className={styles.imageContainer}>
        <img alt="cardboard box with We Voted branding" src={monthlyBox} />
      </HalfPageBlock>
    </div>
  );
};

export default Monthly;