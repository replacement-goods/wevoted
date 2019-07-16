import React from 'react';
import styles from './faq.module.scss';
import InnerContainer from '../../elements/InnerContainer';

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <InnerContainer>
        <h2>Frequently Asked Questions</h2>
        <article className={styles.faqContent}>
          <div className={styles.question}>
            <h3>How do we know where the money is going?</h3>
            <p>
              We're committed to 100% transparency and we'll post everything on our website.
              But basically your money will be going to run ads targeting right-wing
              politicians running for office.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Which candidates will you target?</h3>
            <p>
              We'll make decisions opportunistically with an eye towards maximizing the
              impact at both the national and state levels.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Why did you choose to sell these kinds of products?</h3>
            <p>
              The truth is that we chose these kinds of products because they're fairly easy
              to manufacture. Down the road we hope to expand this business into many other
              product categories.
            </p>
          </div>
          <div className={styles.question}>
            <h3>You're selling products in plastic bottles, wtf?</h3>
            <p>
              It's true. But hear us out. It's pretty hard to start a project like this AND
              be low impact. To be honest the supply chains aren't really there yet to
              provide eco-friendly packaging for these kinds of products at a cost that
              would make this project viable. We're working on better solutions. First of
              all eco-plastics are super promising but many of the supposedly recyclable
              plastics aren't as they seem. We're exploring lot's of alternatives and all we
              can say is that we'll get better.
            </p>
          </div>
          <div className={styles.question}>
            <h3>
              Aren't you hypocrites? Isn't putting more money into politics just going to
              make things worse?
            </h3>
            <p>
              First of all, it's hard to imagine things getting much worse. Second of all,
              all we're doing is fighting fire with fire. Corporate America already
              bankrolls the Right. All we're doing is trying to help fight back. And
              further, if the courts overturned Citizens United and made what we're doing
              illegal we would shut We Voted down and dance in the streets.
            </p>
          </div>
          <div className={styles.question}>
            <h3>Who are you? How can we trust you?</h3>
            <p>
              Fair questions. We are just ordinary pissed off progressives who decided to do
              something. You can follow everything we're doing on our social media pages.
              We'll try to keep everything posted. If you have more questions, ask us in the
              comments and we'll answer.
            </p>
          </div>
        </article>
      </InnerContainer>
    </div>
  );
};

export default FAQ;
