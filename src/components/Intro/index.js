import React from 'react';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';
import bottle from '../../images/bottle.png';
import logoImage from '../../images/logo.png';

const Intro = () => {
  return (
    <div className="introSection">
      <div className="blue-background">
        <InnerContainer>
          <img alt="We Voted" className="logo" src={logoImage} />
          <p className="tagline">...to unseat terrible<br />right-wing politicians.</p>
        </InnerContainer>
      </div>
      <img className="introImage" src={bottle} />
    </div>
  );
};

export default Intro;