import React from 'react';
import classnames from 'classnames';
import styles from './intro.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottle from '../../images/bottle.png';
import logoImage from '../../images/logo.png';
import CallToActionButton from '../../elements/CallToActionButton';
import { Link } from 'gatsby';

const Intro = ({ withProductImage = false }) => {
  return (
    <div className={styles.introSection}>
      <div className={styles.blueBackground}>
        <InnerContainer>
          <div
            className={classnames(
              styles.textContainer,
              withProductImage && styles.bottomPadding,
            )}
          >
            <Link to="/">
              <img alt="We Voted" className={styles.logo} src={logoImage} />
            </Link>
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
      <svg
        className={styles.edge}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 20"
        preserveAspectRatio="none"
      >
        <path
          d="M-.5,19.5V-.5h1920v20s-435-16-960-16S-.5,19.5-.5,19.5Z"
          transform="translate(0.5 0.5)"
        />
      </svg>
      {withProductImage && (
        <div className={styles.introImage}>
          <img src={bottle} />
        </div>
      )}
    </div>
  );
};

export default Intro;
