import React from 'react';
import InnerContainer from '../InnerContainer';
import styles from './basicPage.module.scss';

const BasicPage = ({ children }) => {
  return (
    <InnerContainer>
      <div className={styles.page}>{children}</div>
    </InnerContainer>
  );
};

export default BasicPage;