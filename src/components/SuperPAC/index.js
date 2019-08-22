import React from 'react';
import InnerContainer from '../../elements/InnerContainer';
import styles from './superpac.module.scss';
import pacSeal from '../../images/pacSeal.png';

const SuperPAC = () => {
  return (
    <div className={styles.superPacContainer}>
      <InnerContainer>
        <div className={styles.whiteBackground}>
          <img alt="We Voted Super PAC" src={pacSeal} className={styles.pacImage} />
          <p>The We Voted Super PAC is a wholly independent entity from We Voted® (which is owned by Replacement Goods Inc.).</p>
          <p>The We Voted Super PAC was formed in July 2019 with the following objectives:</p>
          <p>To oppose candidates at all levels of government who are not actively working to:</p>
          <p className={styles.bold}>…enact aggressive climate change legislation guided by science.</p>
          <p className={styles.bold}>…protect women’s right to choose and get government out of women’s reproductive issues.</p>
          <p className={styles.bold}>…reform gun laws to help prevent the scourge of gun violence in our society.</p>
          <p className={styles.bold}>…change our immigration laws to treat migrants humanely and give Dreamers permanent legal status.</p>
          <p className={styles.bold}>…ensure that high quality affordable universal healthcare is a human right ensured to every person in this country.</p>
        </div>
      </InnerContainer>
    </div>
  );
};

export default SuperPAC;