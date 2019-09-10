import React from 'react';

const BigSmallImage = ({ bigImageUrl, smallImageUrl, alt="We Voted" }) => {
  return (
    <picture>
      <source srcset={bigImageUrl} media="(min-width: 750px)" />
      <img alt={alt} src={smallImageUrl} />
    </picture>
  );
};

export default BigSmallImage;