import React from 'react';
import styles from './problem.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import devinNunes from '../../images/devin-nunes.png';
import thumbsDown from '../../images/thumbs-down.png';

const Problem = () => {
  return (
    <div className={styles.problemContainer}>
      <div className={styles.redBackground}>
        <InnerContainer>
          <h3 class={styles.whiteText}>
            <span class={styles.darkRedText}>The home products you buy</span> support the
            right-wing politicians you hate.
          </h3>
          <h3 className={styles.whiteText}><a href="#">Get the facts.</a></h3>
        </InnerContainer>
      </div>
      <div className={styles.problemImage}>
        <img src={devinNunes} />
      </div>
      <div className={styles.thumbsDownImage}>
        <img src={thumbsDown} />
      </div>
    </div>
  );
};

export default Problem;
