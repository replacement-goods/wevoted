import React from 'react';
import styles from './quotePromo.module.scss';

const QuotePromo = ({ quote, author, authorTitle, authorImage }) => {
  return (
    <div className={styles.container}>
      <blockquote>{quote}</blockquote>
      <img className={styles.authorImage} alt={`${author}, ${authorTitle}`} src={authorImage} />
      <h3 className={styles.authorName}>{author}</h3>
      <h4 className={styles.authorTitle}>{authorTitle}</h4>
    </div>
  );
};

export default QuotePromo;