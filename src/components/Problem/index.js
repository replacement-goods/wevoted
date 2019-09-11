import React from 'react';
import styles from './problem.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import rightWingers from '../../images/right-wingers.jpg';
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
          <img alt="Terrible right-wing politicians" src={rightWingers} />
        </div>
      </HalfPageBlock>
      <HalfPageBlock hasBottomImage={true} className={styles.brands}>
        <InnerContainer>
          <h3 class={styles.whiteText}>
            &hellip;and the friendly household brands that support them.
          </h3>
          <p>
            But how can we possibly expect to defeat these assholes when literally every
            day we buy products made by companies that are bankrolling them? They can’t
            hide from the facts. Check out{' '}
            <a href="https://opensecrets.org" target="_blank">
              opensecrets.org
            </a>{' '}
            to learn more.
          </p>
        </InnerContainer>
        <div className={styles.badProductsImage}>
          <img
            alt="Houshold products that support terrible right-wing politicians"
            src={badProducts}
          />
        </div>
      </HalfPageBlock>
    </div>
  );
};

export default Problem;
