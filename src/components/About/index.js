import React from 'react';
import InnerContainer from '../../elements/InnerContainer';
import styles from './about.module.scss';
import join from '../../images/join.png';
import joinLarge from '../../images/join-large.png';
import BigSmallImage from '../../elements/BigSmallImage';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.blueBackground}>
        <InnerContainer>
          <p>
            Every time you buy products from one of the regular brands you are basically
            voting for more of the same.
          </p>
          <p>
            They take your money and support politicians that do NOTHING on guns, climate
            change, women’s rights.
          </p>
          <p className={styles.bold}>When you buy our products you are throwing a hand grenade into the system.</p>
          <p className={styles.bold}>
            We will literally take your money and funnel it into the We Voted superPAC where
            it will be used to fund direct political action against right wing politicians
            that are destroying this country and this planet.
          </p>
          <p>
            Right now we have an IndieGoGo campaign going and we could really use your
            support.
          </p>
        </InnerContainer>
      </div>
      <BigSmallImage
        bigImageUrl={joinLarge}
        smallImageUrl={join}
        className={styles.joinImage}
      />
    </div>
  );
};

export default About;
