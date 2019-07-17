import React from 'react';
import styles from './products.module.scss';
import InnerContainer from '../../elements/InnerContainer';
import products from '../../images/products.jpg';
import productsSmall from '../../images/products-mobile.jpg';
import HalfPageBlock from '../../elements/HalfPageBlock';
import BigSmallImage from '../../elements/BigSmallImage';

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <HalfPageBlock className={styles.fullLine}>
        <InnerContainer>
          <h3>The full line</h3>
          <span className={styles.date}>(Available Fall 2019)</span>
          <p>
            Our full line of high quality all natural home products will be available Fall
            2019.
          </p>
          <ul className={styles.productList}>
            <li>Dish soap</li>
            <li>Hand soap</li>
            <li>Laundry & Dishwasher pods</li>
            <li>13 & 30 gallon garbage bags</li>
            <li>Multi-purpose & glass cleaners</li>
            <li>Water wipes</li>
          </ul>
        </InnerContainer>
      </HalfPageBlock>
      <HalfPageBlock className={styles.productsImage}>
        <BigSmallImage
          bigImageUrl={products}
          smallImageUrl={productsSmall}
        />
      </HalfPageBlock>
    </div>
  );
};

export default Products;
