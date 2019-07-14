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
      <div>
        <InnerContainer>
          <div className={styles.textContainer}>
            <Link to="/">
              <img alt="We Voted" className={styles.logo} src={logoImage} />
            </Link>
            <p className={styles.tagline}>
              We sell basic household products to make money to defeat right-wing
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
        </InnerContainer>
      </div>
    </div>
  );
};

export default Intro;
