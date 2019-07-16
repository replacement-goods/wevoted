import React from 'react';
import styles from './solution.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import mitch from '../../images/mitch.png';
import happyFace from '../../images/happy-face.png';
import HalfPageBlock from '../../elements/HalfPageBlock';

const Solution = () => {
  return (
    <div className={styles.solutionContainer}>
      <HalfPageBlock className={styles.ourPlan}>
        <InnerContainer>
          <h3>So our plan is to beat them at their own game.</h3>
          <p>
            We Voted is a different kind of company. It was started with the singular goal
            of raising money to defeat terrible right-wing politicians and drive them out
            of our government.
          </p>
        </InnerContainer>
        <div className={styles.solutionImage}>
          <img src={mitch} />
        </div>
      </HalfPageBlock>
      <HalfPageBlock className={styles.pac}>
        <InnerContainer>
          <h3>
            Literally half of our profits go directly to the cause of driving the bastards
            out of office.
          </h3>
        </InnerContainer>
      </HalfPageBlock>
    </div>
  );
};

export default Solution;
