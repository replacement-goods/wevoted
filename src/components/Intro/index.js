import React from 'react';
import Logo from '../logo';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';

const Intro = () => {
  return (
    <div className="introSection">
      <InnerContainer>
        <Logo />
      </InnerContainer>
    </div>
  );
};

export default Intro;