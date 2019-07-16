import React from 'react';
import InnerContainer from '../../elements/InnerContainer';
import styles from './about.module.scss';
import join from '../../images/join.png';
import HalfPageBlock from '../../elements/HalfPageBlock';
import bullhorn from '../../images/bullhorn.png';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <HalfPageBlock hasBottomImage={true} className={styles.getInvolved}>
        <InnerContainer>
          <h3>Get involved.</h3>
          <p>
            We Voted is growing every day. We’re looking for talented people to join our
            team and help make a difference. If you’re interested in joining our team send
            us an email. We’d love to hear from you.
          </p>
        </InnerContainer>
        <div className={styles.involvedImage}>
          <img src={bullhorn} />
        </div>
      </HalfPageBlock>
      <HalfPageBlock hasBottomImage={true} className={styles.helpUs}>
        <InnerContainer>
          <h3>We really need your help.</h3>
          <p>
            This project is a labor of love. We’ve funded it so far with our own money and
            some generous contributions. Please consider contributing to our IndieGoGo
            campaign. You’ll get some GREAT products and even some sweet We Voted swag!
          </p>
        </InnerContainer>
      </HalfPageBlock>
    </div>
  );
};

export default About;
