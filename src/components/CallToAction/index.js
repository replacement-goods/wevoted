import React from 'react';
import './styles.scss';
import CallToActionButton from '../../elements/CallToActionButton';

const CallToAction = () => (
  <div className="ctaContainer">
    <CallToActionButton withShadow={true} />
  </div>
);

export default CallToAction;
