import React, { useState } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';
import styles from './menu.module.scss';

const padInts = num => num.toString().padStart(2, '0');

const doCountdown = target => {
  const now = new Date().getTime();
  const distance = target - now;
  if (distance <= 0) {
    return false;
  }

  const minsConst = 1000 * 60;
  const hoursConst = minsConst * 60;
  const daysConst = hoursConst * 24;

  const days = padInts(Math.floor(distance / daysConst));
  const hours = padInts(Math.floor((distance % daysConst) / hoursConst));
  const mins = padInts(Math.floor((distance % hoursConst) / minsConst));
  const secs = padInts(Math.floor((distance % minsConst) / 1000));

  const formattedTime = `${days}:${hours}:${mins}:${secs}`;

  return formattedTime;
}

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [timeToLaunch, setTimeToLaunch] = useState(doCountdown(countDownDate));
  const countDownDate = new Date("Sept 12, 2019 12:00:00").getTime();
  const launchInterval = setInterval(() => {
    setTimeToLaunch(doCountdown(countDownDate));
    if (!timeToLaunch) {
      clearInterval(launchInterval);
    }
  }, 100);

  return (
    <div className={classnames(styles.menu, open && styles.menuOpen)}>
      <div className={styles.persistentNav}>
        <span className={styles.countdown}>Our IndieGogo campaign launches in {timeToLaunch}</span>
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
        className={styles.navToggle}
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
