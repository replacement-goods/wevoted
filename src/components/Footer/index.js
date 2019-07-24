import React from 'react';
import styles from './footer.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import email from '../../images/emailIcon.png';
import facebook from '../../images/facebookIcon.png';
import twitter from '../../images/twitterIcon.png';
import instagram from '../../images/instagramIcon.png';
import button from '../../images/button.png';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <InnerContainer>
        <div className={styles.flexContainer}>
          <form className={styles.newsletterForm}>
            <label for="email">Join our mailing list</label>
            <input type="email" name="email" placeholder="Enter your email address" />
            <button type="submit">
              <img src={button} />
            </button>
          </form>
          <div className={styles.socialLinks}>
            <a href="mailto:contact@wevoted.com">
              <img src={email} />
            </a>
            <a href="https://www.facebook.com/wevotedofficial" target="_blank">
              <img src={facebook} />
            </a>
            <a href="https://www.twitter.com/wevotedofficial" target="_blank">
              <img src={twitter} />
            </a>
            <a href="https://www.instagram.com/wevoted" target="_blank">
              <img src={instagram} />
            </a>
            <p className={styles.copyright}>Copyright Replacement Goods, Inc 2019</p>
          </div>
        </div>
      </InnerContainer>
    </footer>
  );
};

export default Footer;
