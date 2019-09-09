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
              <BigSmallImage bigImageUrl={bottlesLarge} smallImageUrl={bottles} />
            </div>
          </div>
          <VideoPlayer>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/354712751?autoplay=1&title=0&byline=0&portrait=0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </VideoPlayer>
        </InnerContainer>
      )}
    </div>
  );
};

export default Intro;
