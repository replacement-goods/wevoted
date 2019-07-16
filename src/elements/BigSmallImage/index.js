import React from 'react';
import styles from './bigSmallImage.module.scss';

const BigSmallImage = ({ bigImageUrl, smallImageUrl }) => {
  return (
    <div className={styles.container}>
      <img className={styles.bigImage} src={bigImageUrl} />
      <img className={styles.smallImage} src={smallImageUrl} />
    </div>
  );
};

export default BigSmallImage;