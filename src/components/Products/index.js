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
      <svg
        className={styles.edge}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 20"
        preserveAspectRatio="none"
      >
        <path d="M-.5,19.5V-.5h1920v20s-435-16-960-16S-.5,19.5-.5,19.5Z" transform="translate(0.5 0.5)"/>
      </svg>
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
