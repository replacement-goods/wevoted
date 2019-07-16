import React from 'react';
import styles from './footer.module.scss';
import InnerContainer from '../../elements/InnerContainer';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <InnerContainer>
        <form>
          <label for="email">Join our mailing list</label>
          <input type="email" name="email" placeholder="Enter your email address" />
          <button type="submit">&rarr;</button>
        </form>
      </InnerContainer>
    </footer>
  );
};

export default Footer;