import React from 'react';
import styles from './problem.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import rightWingers from '../../images/right-wingers.png';
import badProducts from '../../images/bad-products.jpg';

const Problem = () => {
  return (
    <div className={styles.problemContainer}>
      <div className={styles.leaders}>
        <InnerContainer>
          <h3 class={styles.whiteText}>Terrible right-wing leaders</h3>
          <p>
            Let’s face facts - there is no greater threat to our country and planet than
            these assholes staying in power. On ever single issue they are cynical,
            irresponsible and downright awful.
          </p>
        </InnerContainer>
        <div className={styles.problemImage}>
          <img src={rightWingers} />
        </div>
      </div>
      <div className={styles.brands}>
        <InnerContainer>
          <h3 class={styles.whiteText}>...and the brands that support them</h3>
          <p>
            But how can we possibly expect to defeat these assholes when literally every
            day we buy products made by companies that are bankrolling them? [get the
            facts]
          </p>
        </InnerContainer>
        <div className={styles.badProductsImage}>
          <img src={badProducts} />
        </div>
      </div>
    </div>
  );
};

export default Problem;
