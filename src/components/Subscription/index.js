import React from 'react';
import styles from './subscription.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import subscription from '../../images/subscription.png';

const Option = ({ size, items, cost }) => (
  <div className={styles.option}>
    <h4>{size}</h4>
    <div className={styles.features}>
      <p>Any {items} products</p>
      <p>{cost} / month</p>
    </div>
  </div>
)

const Subscription = () => {
  return (
    <div className={styles.subscriptionContainer}>
      <div className={styles.pinkBackground}>
        <InnerContainer>
          <h3 className={styles.darkPinkText}>When we launch in the fall we'll be offering our products in monthly subscription boxes.</h3>
          <h3 className={styles.whiteText}>By subscribing you are taking direct action to throw the bastards out.</h3>
        </InnerContainer>
      </div>
      <svg
        className={styles.edge}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 20"
        preserveAspectRatio="none"
      >
        <path d="M-.5,19.5V-.5h1920v20s-435-16-960-16S-.5,19.5-.5,19.5Z" transform="translate(0.5 0.5)"/>
      </svg>
      <div className={styles.subscriptionImage}>
        <img src={subscription} />
      </div>
      <div className={styles.subscriptionOptions}>
        <Option size="S" items="3" cost="$24.99" />
        <Option size="M" items="6" cost="$44.99" />
        <Option size="L" items="9" cost="$64.99" />
      </div>
    </div>
  );
};

export default Subscription;