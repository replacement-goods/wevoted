import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import styles from './callToActionButton.module.scss';

const CallToActionButton = ({ withShadow }) => {
  return (
    <a
      href="https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=wevoted.com&utm_medium=referral&utm_campaign=join_button"
      className={classnames(styles.ctaButton, withShadow && styles.withShadow)}
    >
      Join Our Revolution
    </a>
  );
};

export default CallToActionButton;
