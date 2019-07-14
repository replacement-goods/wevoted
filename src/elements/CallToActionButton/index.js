import React from 'react';
import classnames from 'classnames';
import styles from './callToActionButton.module.scss';

const CallToActionButton = ({ withShadow }) => {
  return (
    <a
      href="https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/"
      target="_blank"
      className={classnames(styles.ctaButton, withShadow && styles.withShadow)}
    >
      Join Our Revolution
    </a>
  );
};

export default CallToActionButton;
