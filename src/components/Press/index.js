import React from 'react';
import styles from './press.module.scss';
import InnerContainer from '../../elements/InnerContainer';

const Press = () => {
  return (
    <div className={styles.pressContainer}>
      <InnerContainer>
        <blockquote>"It's like Newman's Own but for pissed off progressives."</blockquote>
      </InnerContainer>
    </div>
  );
};

export default Press;