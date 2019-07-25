import React from 'react';
import styles from './problem.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import rightWingers from '../../images/right-wingers.png';
import badProducts from '../../images/bad-products.jpg';
import HalfPageBlock from '../../elements/HalfPageBlock';

const Problem = () => {
  return (
    <div className={styles.problemContainer}>
      <HalfPageBlock hasBottomImage={true} className={styles.leaders}>
        <InnerContainer>
          <h3 class={styles.whiteText}>Terrible right-wing leaders&hellip;</h3>
          <p>
            Let’s face facts - there is no greater threat to our country and planet than
            these assholes staying in power. On every single issue they are cynical,
            irresponsible and downright awful.
          </p>
        </InnerContainer>
        <div className={styles.problemImage}>
          <img src={rightWingers} />
        </div>
      </HalfPageBlock>
      <HalfPageBlock hasBottomImage={true} className={styles.brands}>
        <InnerContainer>
          <h3 class={styles.whiteText}>&hellip;and the brands that support them</h3>
          <p>
            But how can we possibly expect to defeat these assholes when literally every
            day we buy products made by companies that are bankrolling them?
          </p>
          <p>
            Below are just a few of the countless brands from companies that routinely
            give money to awful right-wing leaders.
          </p>
        </InnerContainer>
        <div className={styles.badProductsImage}>
          <img src={badProducts} />
        </div>
      </HalfPageBlock>
    </div>
  );
};

export default Problem;
