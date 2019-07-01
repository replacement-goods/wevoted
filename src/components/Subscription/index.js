import React from 'react';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';

const Subscription = () => {
  return (
    <div className="subscriptionContainer">
      <InnerContainer>
        <h3 className="dark-pink-text">When we launch in the fall we'll be offering our products in monthly subscription boxes.</h3>
        <h3 className="white-text">By subscribing you are taking direct action to throw the bastards out.</h3>
      </InnerContainer>
    </div>
  );
};

export default Subscription;