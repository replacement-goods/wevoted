import React from 'react';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';
import mitch from '../../images/mitch.png';

const Solution = () => {
  return (
    <div className="solutionContainer">
      <div className="blue-background">
        <InnerContainer>
          <h3 className="white-text"><span className="dark-blue-text">Not us.</span> Literally half our profits go to unseat terrible right-wing politicians.</h3>
        </InnerContainer>
      </div>
      <img className="solutionImage" src={mitch} />
    </div>
  );
};

export default Solution;