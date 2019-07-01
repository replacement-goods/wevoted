import React from 'react';
import styles from './solution.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import mitch from '../../images/mitch.png';
import mitchLarge from '../../images/mitch-large.png';
import BigSmallImage from '../../elements/BigSmallImage';

const Solution = () => {
  return (
    <div className={styles.solutionContainer}>
      <div className={styles.blueBackground}>
        <InnerContainer>
          <h3 className={styles.whiteText}>
            <span className={styles.darkBlueText}>Not us.</span> Literally half our
            profits go to unseat terrible right-wing politicians.
          </h3>
        </InnerContainer>
      </div>
      <BigSmallImage
        bigImageUrl={mitchLarge}
        smallImageUrl={mitch}
        className={styles.solutionImage}
      />
    </div>
  );
};

export default Solution;
