import React from 'react';
import classnames from 'classnames';
import styles from './intro.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottles from '../../images/bottles.jpg';
import bottlesLarge from '../../images/bottles-large.jpg';
import logoImage from '../../images/logo.png';
import logoLarge from '../../images/logo-large.png';
import CallToActionButton from '../../elements/CallToActionButton';
import { Link } from 'gatsby';
import BigSmallImage from '../../elements/BigSmallImage';
import VideoPlayer from '../VideoPlayer';

const Intro = ({ withProductImage = false }) => {
  return (
    <div className={styles.introSection}>
      <Link to="/">
        <img alt="We Voted" className={styles.logoMobile} src={logoImage} />
        <img alt="We Voted" className={styles.logoDesktop} src={logoLarge} />
      </Link>
      {withProductImage && (
        <InnerContainer>
          <div className={styles.flexContainer}>
            <div className={styles.textContainer}>
              <p className={styles.tagline}>
                We sell{' '}
                <del>
                  <span>basic</span>
                </del>
                <sup>great</sup> household products to make money to{' '}
                <span className={styles.pinkText}>defeat right-wing politicians.</span>
              </p>
            </div>
            <div className={styles.introImage}>
              <BigSmallImage alt="bottles of We Voted brand cleaning supplies" bigImageUrl={bottlesLarge} smallImageUrl={bottles} />
            </div>
          </div>
        </InnerContainer>
      )}
    </div>
  );
};

export default Intro;
