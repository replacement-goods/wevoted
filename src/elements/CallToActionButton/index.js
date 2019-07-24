import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './callToActionButton.module.scss';

const CallToActionButton = ({ withShadow }) => {
  return (
    <a
      href="/signup/"
      target="_blank"
      className={classnames(styles.ctaButton, withShadow && styles.withShadow)}
    >
      Join Our Revolution
    </a>
  );
};

export default CallToActionButton;
