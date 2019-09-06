import React from 'react';
import styles from './solution.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import soap from '../../images/soap-bar.jpg';
import pin from '../../images/pin.jpg';
import pinSmall from '../../images/pin-small.png';
import HalfPageBlock from '../../elements/HalfPageBlock';
import BigSmallImage from '../../elements/BigSmallImage';

const Solution = () => {
  return (
    <div className={styles.solutionContainer}>
      <HalfPageBlock hasBottomImage={true} className={styles.ourPlan}>
        <InnerContainer>
          <h3>So our plan is to beat them at their own game.</h3>
          <p>
            We Voted® is a different kind of company. It was started with the singular goal
            of raising money to defeat terrible right-wing politicians and drive them out
            of our government.
          </p>
        </InnerContainer>
        <div className={styles.planImage}>
          <img alt="Bar of We Voted soap" src={soap} />
        </div>
      </HalfPageBlock>
      <HalfPageBlock hasBottomImage={true} className={styles.pac}>
        <InnerContainer>
          <h3>
            Literally half of our profits go directly to the cause of driving the bastards
            out of office.
          </h3>
        </InnerContainer>
        <div className={styles.pacImage}>
          <BigSmallImage
            bigImageUrl={pin}
            smallImageUrl={pinSmall}
          />
        </div>
      </HalfPageBlock>
    </div>
  );
};

export default Solution;
