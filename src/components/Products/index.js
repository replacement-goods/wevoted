import React from 'react';
import styles from './products.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import products from '../../images/products.png';
import productsLarge from '../../images/products-large.png';
import BigSmallImage from '../../elements/BigSmallImage';

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.greenBackground}>
        <InnerContainer>
          <h3 className={styles.darkGreenText}>We sell high-quality household goods.</h3>
          <h3 className={styles.whiteText}>
            Yeah, it's super boring. But we're doing this for the cause.
          </h3>
        </InnerContainer>
      </div>
      <BigSmallImage
        bigImageUrl={productsLarge}
        smallImageUrl={products}
        className={styles.productsImage}
      />
      <InnerContainer>
        <ul className={styles.productList}>
          <li>DISH SOAP</li>
          <li>HAND SOAP</li>
          <li>BAR SOAP</li>
          <li>ALL PURPOSE & WINDOW CLEANERS</li>
          <li>DISHWASHER PODS</li>
          <li>LAUNDRY PODS</li>
          <li>13 & 30 GALLON GARBAGE BAGS</li>
        </ul>
        <ul className={styles.productFeatures}>
          <li>All Natural</li>
          <li>Made in the USA</li>
          <li>Recycled Packaging</li>
          <li>Ethically Sourced</li>
        </ul>
      </InnerContainer>
    </div>
  );
};

export default Products;
