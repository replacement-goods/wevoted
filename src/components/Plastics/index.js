import React from 'react';
import styles from './plastics.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import cartonsLarge from '../../images/cartons-large.png';
import cartonsSmall from '../../images/cartons-small.png';
import HalfPageBlock from '../../elements/HalfPageBlock';
import BigSmallImage from '../../elements/BigSmallImage';

const Plastics = () => {
  return (
    <div className={styles.plasticsContainer}>
      <HalfPageBlock className={styles.cartonsImage}>
        <BigSmallImage alt="Paper cartons of We Voted brand cleaning supplies" bigImageUrl={cartonsLarge} smallImageUrl={cartonsSmall} />
      </HalfPageBlock>
      <HalfPageBlock className={styles.plastics}>
        <InnerContainer>
          <h3>A note about plastic.</h3>
          <p>
            We hate plastic. It gives us no joy that the first offering of We Voted®
            products are packaged in plastic.
          </p>
          <p>
            We’ve done a ton of research to find better solutions. Many of the
            alternatives currently available like eco-plastics and compostable plastics
            are highly misleading and are not a material improvement. Using them would be
            virtue signaling, and that’s not our thing.
          </p>
          <p>
            What we’re doing is looking for real alternatives. Over the coming months
            we’ll be testing a variety of solutions and asking our customers to weigh in.
            We look forward to hearing from you.
          </p>
        </InnerContainer>
      </HalfPageBlock>
    </div>
  );
};

export default Plastics;
