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
          <h3 class={styles.whiteText}>Terrible right-wing leaders</h3>
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
          <h3 class={styles.whiteText}>...and the brands that support them</h3>
          <p>
            But how can we possibly expect to defeat these assholes when literally every
            day we buy products made by companies that are bankrolling them?
          </p>
          <p className={styles.caption}>Just a few of  the thousands of brands with parent companies that support evil right-wing bullshit.</p>
        </InnerContainer>
        <div className={styles.badProductsImage}>
          <img src={badProducts} />
        </div>
      </HalfPageBlock>
    </div>
  );
};

export default Problem;
