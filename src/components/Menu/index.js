import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classnames(styles.menu, open && styles.menuOpen)}>
      <div className={styles.persistentNav}>
        <a href="https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/" target="_blank">Support our IndieGoGo Campaign</a>
        <a href="mailto:contact@wevoted.com">Contact Us</a>
      </div>
      <a className={styles.navToggle} onClick={() => setOpen(!open)}><span></span></a>
      <div className={styles.overlay}>
        <nav className={styles.mainNav}>
          <a href="mailto:contact@wevoted.com">Contact Us</a>
          <a href="https://www.facebook.com/wevotedofficial" target="_blank">Facebook</a>
          <a href="https://www.twitter.com/wevotedofficial" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/wevoted" target="_blank">Instagram</a>
          <Link to="/terms/">Terms and Conditions</Link>
        </nav>
        <form className={styles.contactForm} method="post" action="#" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" id="name" required />
          <input type="text" name="email" id="email" required />
          <textarea name="message" id="message" rows="4" required />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Menu;