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
          <form
            action="https://wevoted.us20.list-manage.com/subscribe/post?u=6a6cf2da5da0bba15800e56c4&amp;id=567078c5cf"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.newsletterForm}
          >
            <label for="email">Join our mailing list</label>
            <input type="email" name="EMAIL" placeholder="Enter your email address" />
            <button type="submit">
              <img alt="Click here to submit your email address" src={button} />
            </button>
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_6a6cf2da5da0bba15800e56c4_567078c5cf"
                tabindex="-1"
                value=""
              />
            </div>
          </form>
          <div className={styles.socialLinks}>
            <a href="mailto:contact@wevoted.com">
              <img alt="email icon" src={email} />
            </a>
            <a
              href="https://www.facebook.com/wevotedofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="facebook icon" src={facebook} />
            </a>
            <a
              href="https://www.twitter.com/wevotedofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="twitter icon" src={twitter} />
            </a>
            <a
              href="https://www.instagram.com/wevoted"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="instagram icon" src={instagram} />
            </a>
            <p className={styles.copyright}>Copyright Replacement Goods, Inc 2019</p>
          </div>
        </div>
      </InnerContainer>
    </footer>
  );
};

export default Footer;
