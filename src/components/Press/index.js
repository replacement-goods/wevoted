import React from 'react';
import styles from './press.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import upworthyLogo from '../../images/upworthy.png';

const Press = () => {
  return (
    <div className={styles.pressContainer}>
      <InnerContainer>
        <blockquote>"It's like Newman's Own but for pissed off progressives."</blockquote>
        <img className={styles.upworthyLogo} src={upworthyLogo} />
      </InnerContainer>
    </div>
  );
};

export default Press;