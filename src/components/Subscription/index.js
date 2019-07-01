import React from 'react';
import styles from './subscription.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import BigSmallImage from '../../elements/BigSmallImage';
import subscription from '../../images/subscription.png';
import subscriptionLarge from '../../images/subscription-large.png';

const Subscription = () => {
  return (
    <div className={styles.subscriptionContainer}>
      <div className={styles.pinkBackground}>
        <InnerContainer>
          <h3 className={styles.darkPinkText}>When we launch in the fall we'll be offering our products in monthly subscription boxes.</h3>
          <h3 className={styles.whiteText}>By subscribing you are taking direct action to throw the bastards out.</h3>
        </InnerContainer>
      </div>
      <BigSmallImage
        bigImageUrl={subscriptionLarge}
        smallImageUrl={subscription}
        className={styles.subscriptionImage}
      />
    </div>
  );
};

export default Subscription;