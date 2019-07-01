import React from 'react';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';
import devinNunes from '../../images/devin-nunes.png';

const Problem = () => {
  return (
    <div className="problemContainer">
      <div className="red-background">
        <InnerContainer>
          <h3 class="white-text"><span class="dark-red-text">The home products you buy</span> support the right-wing politicians you hate.</h3>
        </InnerContainer>
      </div>
      <img className="problemImage" src={devinNunes} />
    </div>
  );
};

export default Problem;