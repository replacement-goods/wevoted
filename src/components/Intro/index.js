import React from 'react';
import styles from './intro.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottle from '../../images/bottle.png';
import logoImage from '../../images/logo.png';

const Intro = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.blueBackground}>
        <InnerContainer>
          <div className={styles.textContainer}>
            <img alt="We Voted" className={styles.logo} src={logoImage} />
            <p className={styles.tagline}>...to unseat terrible<br />right-wing politicians.</p>
          </div>
        </InnerContainer>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.introImage} src={bottle} />
      </div>
    </div>
  );
};

export default Intro;