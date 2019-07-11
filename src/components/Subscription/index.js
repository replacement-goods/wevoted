import React from 'react';
import styles from './subscription.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import subscription from '../../images/subscription.png';
import theBox from '../../images/theBox.png';

const Subscription = () => {
  return (
    <div className={styles.subscriptionContainer}>
      <div className={styles.boxImage}>
        <img src={theBox} />
      </div>
      <div className={styles.greenBackground}>
        <InnerContainer>
          <h3 className={styles.whiteText}>This is our basic box<br />$24.99 per month.</h3>
          <h3 className={styles.darkGreenText}>It contains hand soap, dish soap, laundry detergent pods and kitchen garbage bags.</h3>
          <h3 className={styles.whiteText}><a href="https://www.indiegogo.com/projects/these-home-goods-defeat-right-wing-politicians/" target="_blank">You can order it now from our IndieGoGo campaign.</a></h3>
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
      <InnerContainer>
        <h3 className={styles.blueText}>We get that this seems kinda crazy and we can imagine that you’re skeptical.</h3>
        <h3 className={styles.blackBlueText}>Why should you trust that the political action that we are going to support will be in line with your values?</h3>
      </InnerContainer>
    </div>
  );
};

export default Subscription;