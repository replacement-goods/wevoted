import React from 'react';
import styles from './bigSmallImage.module.scss';

const BigSmallImage = ({ bigImageUrl, smallImageUrl, alt="We Voted" }) => {
  return (
    <div className={styles.container}>
      <img alt={alt} className={styles.bigImage} src={bigImageUrl} />
      <img alt={alt} className={styles.smallImage} src={smallImageUrl} />
    </div>
  );
};

export default BigSmallImage;