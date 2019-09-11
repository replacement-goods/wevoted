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
    <div className={classnames(styles.introSection, withProductImage && styles.whiteBg)}>
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
            <div className={styles.ctaContainer}>
              <CallToActionButton />
            </div>
            <div className={styles.introImage}>
              <BigSmallImage alt="bottles of We Voted brand cleaning supplies" bigImageUrl={bottlesLarge} smallImageUrl={bottles} />
            </div>
          </div>
          <VideoPlayer>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://www.youtube.com/embed/pHnkOLLlBUQ"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </VideoPlayer>
        </InnerContainer>
      )}
    </div>
  );
};

export default Intro;
