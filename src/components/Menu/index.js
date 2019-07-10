import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './menu.module.scss';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classnames(styles.menu, open && styles.menuOpen)}>
      <a className={styles.navToggle} onClick={() => setOpen(!open)}><span></span></a>
      <div className={styles.overlay}>
        <nav className={styles.mainNav}>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
        </nav>
      </div>
    </div>
  );
};

export default Menu;