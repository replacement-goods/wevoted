import React from 'react';
import styles from './solution.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import mitch from '../../images/mitch.png';
import mitchLarge from '../../images/mitch-large.png';
import BigSmallImage from '../../elements/BigSmallImage';
import happyFace from '../../images/happy-face.png';
import happyFaceLarge from '../../images/happy-face-large.png';

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
      <div className={styles.solutionImage}>
        <img src={mitch} />
      </div>
      <div className={styles.happyFaceImage}>
        <img src={happyFace} />
      </div>
    </div>
  );
};

export default Solution;
