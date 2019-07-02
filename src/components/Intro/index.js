import React from 'react';
import styles from './intro.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottle from '../../images/bottle.png';
import bottleLarge from '../../images/intro-large.png';
import logoImage from '../../images/logo.png';
import BigSmallImage from '../../elements/BigSmallImage';
import CallToActionButton from '../../elements/CallToActionButton';

const Intro = () => {
  return (
    <div className={styles.introSection}>
      <div className={styles.blueBackground}>
        <InnerContainer>
          <div className={styles.textContainer}>
            <img alt="We Voted" className={styles.logo} src={logoImage} />
            <p className={styles.tagline}>
              ...to unseat terrible
              <br />
              right-wing politicians.
            </p>
            <div className={styles.ctaContainer}>
              <CallToActionButton />
            </div>
          </div>
        </InnerContainer>
      </div>
      <div className={styles.imageContainer}>
        <BigSmallImage
          bigImageUrl={bottleLarge}
          smallImageUrl={bottle}
          className={styles.introImage}
        />
      </div>
    </div>
  );
};

export default Intro;
