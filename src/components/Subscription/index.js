import React from 'react';
import styles from './subscription.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import theBox from '../../images/theBox.jpg';
import theBoxSmall from '../../images/theBox-mobile.png';
import HalfPageBlock from '../../elements/HalfPageBlock';
import BigSmallImage from '../../elements/BigSmallImage';

const Subscription = () => {
  return (
    <div className={styles.subscriptionContainer}>
      <HalfPageBlock className={styles.boxImage}>
        <BigSmallImage alt="Open box containing We Voted brand cleaning supplies" bigImageUrl={theBox} smallImageUrl={theBoxSmall} />
      </HalfPageBlock>
      <HalfPageBlock className={styles.basics}>
        <InnerContainer>
          <h3>The Basics</h3>
          <a
            href="https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Available to pre-buy now via our Indiegogo campaign
          </a>
          <h4>$25 / Month</h4>
          <p>
            It contains <strong>hand soap</strong>, <strong>dish soap</strong>,{' '}
            <strong>laundry detergent pods</strong> and{' '}
            <strong>kitchen garbage bags</strong>.
          </p>
          <ul className={styles.productFeatures}>
            <li>All Natural</li>
            <li>Made in the USA</li>
            <li>Recycled Packaging</li>
            <li>Ethically Sourced</li>
          </ul>
        </InnerContainer>
      </HalfPageBlock>
    </div>
  );
};

export default Subscription;
