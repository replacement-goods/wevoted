import React from 'react';
import InnerContainer from '../../elements/InnerContainer';
import styles from './about.module.scss';
import HalfPageBlock from '../../elements/HalfPageBlock';
import bullhorn from '../../images/bullhorn.jpg';
import bag from '../../images/bag.jpg';
import bagSmall from '../../images/bag-small.png';
import BigSmallImage from '../../elements/BigSmallImage';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <HalfPageBlock hasBottomImage={true} className={styles.getInvolved}>
        <InnerContainer>
          <h3>Get involved.</h3>
          <p>
            We Voted® is growing every day. We’re looking for talented people to join our
            team and help make a difference. If you’re interested in joining our team send
            us an email. We’d love to hear from you.
          </p>
        </InnerContainer>
        <div className={styles.involvedImage}>
          <img src={bullhorn} alt="Hand holding a bullhorn" />
        </div>
      </HalfPageBlock>
      <HalfPageBlock hasBottomImage={true} className={styles.helpUs}>
        <InnerContainer>
          <h3>We really need your help.</h3>
          <p>
            This project is a labor of love. We’ve funded it so far with our own money and
            some generous contributions. Please consider contributing to{' '}
            <a
              href="https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=wevoted.com&utm_medium=referral&utm_campaign=about_section"
              target="_blank"
              rel="noopener noreferrer"
            >
              our IndieGoGo campaign
            </a>
            . You’ll get some GREAT products and even some sweet We Voted® swag!
          </p>
        </InnerContainer>
        <div className={styles.swagImage}>
          <a
            href="https://www.indiegogo.com/projects/we-voted-our-soaps-defeat-right-wing-politicians/?utm_source=wevoted.com&utm_medium=referral&utm_campaign=about_secton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BigSmallImage
              alt="Tote bag with We Voted branding"
              bigImageUrl={bag}
              smallImageUrl={bagSmall}
            />
          </a>
        </div>
      </HalfPageBlock>
    </div>
  );
};

export default About;
