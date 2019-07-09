import React from 'react';
import styles from './press.module.scss';
import InnerContainer from '../../elements/InnerContainer';

const Press = () => {
  return (
    <div className={styles.pressContainer}>
      <InnerContainer>
        <blockquote>"Great quotes from super enthusiastic progressive media sources coming really soon!"</blockquote>
      </InnerContainer>
    </div>
  );
};

export default Press;