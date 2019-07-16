import React from 'react';
import classnames from 'classnames';
import styles from './intro.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottles from '../../images/bottles.jpg';
import logoImage from '../../images/logo.png';
import CallToActionButton from '../../elements/CallToActionButton';
import { Link } from 'gatsby';

const Intro = ({ withProductImage = false }) => {
  return (
    <div className={styles.introSection}>
      <Link to="/">
        <img alt="We Voted" className={styles.logo} src={logoImage} />
      </Link>
      <InnerContainer>
        <div className={styles.flexContainer}>
          <div className={styles.textContainer}>
            <p className={styles.tagline}>
              We sell great household products to make money to defeat right-wing
              politicians.
            </p>
            <div className={styles.ctaContainer}>
              <CallToActionButton />
            </div>
          </div>
          {withProductImage && (
            <div className={styles.introImage}>
              <img src={bottles} />
            </div>
          )}
        </div>
      </InnerContainer>
    </div>
  );
};

export default Intro;
