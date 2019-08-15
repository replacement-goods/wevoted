import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';
import CountdownClock from '../../elements/CountdownClock';

const Menu = ({ mobileCdVisible }) => {
  const [open, setOpen] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <div className={classnames(styles.menu, open && styles.menuOpen)}>
      <div className={styles.persistentNav}>
        <span className={styles.countdown}>Our IndieGogo campaign launches in <CountdownClock /></span>
        <a
          onClick={() => {
            setOpen(true);
            setContactVisible(true);
          }}
        >
          Contact Us
        </a>
      </div>
      <a
        className={classnames(styles.navToggle, mobileCdVisible && styles.mobileCdVisible)}
        onClick={() => {
          setOpen(!open);
          if (!open) {
            setContactVisible(false);
          }
        }}
      >
        <span></span>
      </a>
      <div className={styles.overlay}>
        <nav className={classnames(styles.mainNav, !contactVisible && styles.visible)}>
          <Link to="/about-us">About Us</Link>
          <Link to="/team">The Team</Link>
          <a
            onClick={() => {
              setContactVisible(true);
            }}
            href="#contact"
          >
            Contact Us
          </a>
          <a
            href="https://www.facebook.com/wevotedofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/wevotedofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/wevoted"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <Link to="/terms/">Terms and Conditions</Link>
        </nav>
        <form
          className={classnames(styles.contactForm, contactVisible && styles.visible)}
          method="post"
          action="#"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="name" name="name" id="name" required />
          <input
            type="text"
            placeholder="email address"
            name="email"
            id="email"
            required
          />
          <textarea name="message" id="message" rows="4" required />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Menu;
