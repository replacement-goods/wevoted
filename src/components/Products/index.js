import React from 'react';
import './styles.scss';
import InnerContainer from '../../elements/InnerContainer';
import products from '../../images/products.png';

const Products = () => {
  return (
    <div className="productsContainer">
      <div className="green-background">
        <InnerContainer>
          <h3 className="dark-green-text">We sell high-quality household goods.</h3>
          <h3 className="white-text">Yeah, it's super boring. But we're doing this for the cause.</h3>
        </InnerContainer>
      </div>
      <img className="productsImage" src={products} />
    </div>
  );
};

export default Products;